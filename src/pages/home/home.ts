import { Component, EventEmitter } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { CardListProvider } from '../../providers/card-list/card-list';
import _ from 'lodash'
import { ResultPage } from '../result/result';
import 'hammerjs';
import { Card, AttendantCard } from '../../model/app-models';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  card_list: Card[] = []
  remove_cnt = 0 // 山札がなくなるまでループしたあとにカードリストを再構成する時に取り除いたカードの枚数の合計値

  yes_card_list: Card[] = []
  no_card_list: Card[] = []

  swipe_cnt = 0

  ready = false;

  // 以下swaipカード用のクラス変数たち
  attendants: AttendantCard[] = [];
  cardDirection = "xy";
  cardOverlay: any = {
    like: {
      backgroundColor: '#28e93b'
    },
    dislike: {
      backgroundColor: '#e92828'
    }
  }



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private card_provider: CardListProvider,
    private loadingCtrl: LoadingController,

  ) {

  }

  async ionViewDidEnter() {

    const loading = this.loadingCtrl.create({ content: "Loading..." })
    await loading.present()

    this.card_list = await this.card_provider.getRamdomCards()
    this.attendants = []
    this.yes_card_list = []
    this.no_card_list = []
    this.remove_cnt = 0

    this.readyCardList()

    this.ready = true;
    loading.dismissAll()
  }

  readyCardList() {
    this.swipe_cnt = 0
    this.card_list.map((_card, i) => {
      this.attendants.push({
        id: i + 1,
        likeEvent: new EventEmitter(),
        destroyEvent: new EventEmitter(),
        image: 'assets/imgs/' + _card.series + '/' + _card.name + '.png'
      });
    })

  }


  onCardInteract(event) {
    console.log(event);

    if (event.like) {
      this.yes_card_list.push(this.card_list[this.swipe_cnt])
    }
    if (!event.like) {
      this.no_card_list.push(this.card_list[this.swipe_cnt])
    }

    this.swipe_cnt++

    if (this.yes_card_list.length >= 10) {
      console.log("終了！")
      console.log(this.yes_card_list)
      this.navCtrl.push(ResultPage, {
        cards: this.yes_card_list
      })
    }

    if (this.yes_card_list.length + this.no_card_list.length >= this.card_list.length + this.remove_cnt) {
      console.log("全部のカードが無くなりました！！")
      this.remove_cnt = this.yes_card_list.length
      this.card_list = _.cloneDeep(this.no_card_list)
      this.no_card_list = []
      this.readyCardList()
    }

  }

}
