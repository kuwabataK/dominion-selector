import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Card } from '../../model/app-models';
import { CardListProvider } from '../../providers/card-list/card-list';
import { ResultPage } from '../result/result';

/**
 * Generated class for the TwoPickPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-two-pick',
  templateUrl: 'two-pick.html',
})
export class TwoPickPage {

  card_list: Card[] = []
  yes_cards: Card[] = []
  upCards: Card[] = []
  downCards: Card[] = []

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private card_provider: CardListProvider, ) {
  }

  async ionViewWillEnter() {
    this.card_list = await this.card_provider.getRamdomCards()
    this.yes_cards = []
    this.setCards()
  }

  /**
   * カードが選択されたときに呼び出される関数
   * @param cards 
   */
  onClickSelectCards(cards: Card[]) {
    this.yes_cards = [...this.yes_cards, ...cards]
    this.setCards()
    if(this.yes_cards.length >= 10){
      this.finishSelect()
    }
  }

  /**
   * 表示されるカードを更新する
   */
  private setCards() {
    this.setUpcards(this.card_list)
    this.card_list.shift()
    this.card_list.shift()
    this.setDowncards(this.card_list)
    this.card_list.shift()
    this.card_list.shift()
  }

  /**
   * 画面上部に表示されるカードを新しいカードに更新する
   * @param cards 
   */
  private setUpcards(cards: Card[]) {
    this.upCards = []
    this.upCards.push(cards[0])
    this.upCards.push(cards[1])
  }

  /**
   * 画面下部に表示されるカードを新しいカードに更新する
   * @param cards 
   */
  private setDowncards(cards: Card[]) {
    this.downCards = []
    this.downCards.push(cards[0])
    this.downCards.push(cards[1])
  }

  /**
   * カードの選択が終わったときに呼び出す関数
   */
  private finishSelect() {
    console.log("終了！")
    console.log(this.yes_cards)
    this.navCtrl.push(ResultPage, {
      cards: this.yes_cards
    })
  }

}
