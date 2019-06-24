import { Component, EventEmitter } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Card } from '../../model/app-models';
import { CardListProvider } from '../../providers/card-list/card-list';
import { ResultPage } from '../result/result';
import _ from 'lodash'
import { StorageProvider } from '../../providers/storage/storage';


/**
 * Generated class for the TinderRemoveCardModePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tinder-remove-card-mode',
  templateUrl: 'tinder-remove-card-mode.html',
})
export class TinderRemoveCardModePage {

  player_num = 4

  card_list: Card[] = []
  remove_cnt = 0

  yes_card_list: Card[] = []
  no_card_list: Card[] = []

  swipe_cnt = 0

  user_no_swipe_cnt = 0
  user_yes_swipe_cnt = 0

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

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private card_provider: CardListProvider,
    private loadingCtrl: LoadingController,
    private storage:StorageProvider,
    private alertCtrl:AlertController,
    ) {
  }


  async ionViewDidEnter() {

    const loading = this.loadingCtrl.create({content: "Loading..."})
    await loading.present()

    this.player_num = await this.storage.getNumOfPeople()

    const all_c = await this.card_provider.getRamdomCards()

    this.card_list = all_c.slice(0,10 + this.player_num) // とりあえず基本だけ人数+10枚読み込む
    this.attendants = []
    this.yes_card_list = []
    this.no_card_list = []
    this.remove_cnt = 0

    this.readyCardList()
    this.user_no_swipe_cnt = 0
    this.user_yes_swipe_cnt = 0

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

    // yesが選ばれたときの処理
    if (event.like) {
      this.yes_card_list.push(this.card_list[this.swipe_cnt])
      this.user_yes_swipe_cnt++
    }
    // noが選ばれたときの処理
    if (!event.like) {
      this.no_card_list.push(this.card_list[this.swipe_cnt])
      this.user_no_swipe_cnt++
    }

    this.swipe_cnt++

    if (this.card_list.length + this.remove_cnt - this.no_card_list.length <= 10) {
      console.log("終了！")
      this.navCtrl.push(ResultPage, {
        cards: _.difference(this.card_list, this.no_card_list)
      })
      return
    }

    if (this.yes_card_list.length + this.no_card_list.length >= this.card_list.length +  this.remove_cnt) {
      console.log("全部のカードが無くなりました！！")
      this.remove_cnt = this.no_card_list.length
      this.card_list = _.cloneDeep(this.yes_card_list)
      this.yes_card_list = []
      this.readyCardList()
    }

    if (this.user_yes_swipe_cnt >= 3 || this.user_no_swipe_cnt >= 1 ){
      this.alertMessage("次の人に回してください")
      this.user_no_swipe_cnt = 0
      this.user_yes_swipe_cnt = 0
    }

  }

  /**
   * 確認ダイアログを表示します
   * 
   * @param msg 表示するメッセージ
   */
  async alertMessage(msg :string){
    let alert = this.alertCtrl.create({
      title: '確認',
      message: msg,
      buttons: [
        {
          text: 'OK',
          handler: () => {}
        }
      ]
    });
    alert.present();
  }
}
