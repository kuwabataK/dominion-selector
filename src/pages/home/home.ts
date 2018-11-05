import { Component, EventEmitter } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { DomSanitizer } from '../../../node_modules/@angular/platform-browser';
import { CardList, Card } from '../../model/app-models';
import { CardListProvider } from '../../providers/card-list/card-list';
import _ from 'lodash'
import { ResultPage } from '../result/result';
import 'hammerjs';

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

  yes_card_list: Card[] = []
  no_card_list: Card[] = []

  swipe_cnt = 0

  ready = false;
  attendants = [];
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
    private loadingCtrl:LoadingController,

  ) {

  }

  async ionViewDidEnter() {

    const loading = this.loadingCtrl.create({content: "Loading..."})
    await loading.present()

    const all_c = await this.card_provider.getAll()

    // 配列の値をランダムに入れ替える
    for (var i = all_c[0].cards.length - 1; i >= 0; i--){

      // 0~iのランダムな数値を取得
      var rand = Math.floor( Math.random() * ( i + 1 ) );
    
      // 配列の数値を入れ替える
      [all_c[0].cards[i], all_c[0].cards[rand]] = [all_c[0].cards[rand], all_c[0].cards[i]]
    
    }

    this.card_list = all_c[0].cards // とりあえず基本だけ読み込む
    this.attendants = []
    this.yes_card_list = []
    this.no_card_list = []

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
        image: 'assets/imgs/' + _card.name + '.png'
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

    if (this.yes_card_list.length + this.no_card_list.length >= this.card_list.length) {
      console.log("全部のカードが無くなりました！！")
      this.card_list = _.cloneDeep(this.no_card_list)
      this.no_card_list = []
      this.readyCardList()
    }

  }

}
