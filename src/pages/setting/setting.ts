import { Component, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { CardListProvider } from '../../providers/card-list/card-list';
import { Card } from '../../model/app-models';
import { ResultPage } from '../result/result';
import _ from 'lodash'
import { StorageProvider } from '../../providers/storage/storage';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: StorageProvider,
  ) {
  }

  async ionViewDidEnter() {
    this.num_of_people = await this.storage.getNumOfPeople()
  }

  async selectNumOfPeople(){
    await this.storage.setNumOfPeople(this.num_of_people)
  }

}
