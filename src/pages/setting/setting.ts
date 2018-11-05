import { Component, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import _ from 'lodash'
import { StorageProvider } from '../../providers/storage/storage';
import { CardListProvider } from '../../providers/card-list/card-list';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  num_of_people = 4

  series = []

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: StorageProvider,
    private card_provider: CardListProvider,
  ) {
  }

  async ionViewDidEnter() {
    this.num_of_people = await this.storage.getNumOfPeople()
    const s = await this.storage.getSeries()
    if (s.length === 0) {
      const all_cards = await this.card_provider.getAll()
      const series_names = _.uniqBy(all_cards, 'series').map((_c) => { return _c.series })
      this.series = series_names.map((_s) => {
        return {
          "name": _s,
          "enable": true
        }
      })
    }
    this.series = (s.length === 0 ? this.series : s)
  }

  async selectNumOfPeople() {
    await this.storage.setNumOfPeople(this.num_of_people)
  }

  async setSeries() {
    await this.storage.setSeries(this.series)
  }

}
