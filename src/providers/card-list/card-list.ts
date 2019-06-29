import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Card } from '../../model/app-models';
import { StorageProvider } from '../storage/storage';

/*
  Generated class for the CardListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardListProvider {

  constructor(
    public http: Http,
    private storage: StorageProvider
  ) {
  }

  /**
   * すべてのカードリストを取得する
   */
  async getAll(): Promise<Card[]> {
    const cards = await this.http.get("assets/json/card-list.json").toPromise()
    return cards.json()["cards"]
  }

  /**
   * Settingで指定されたシリーズのカードのみを選び出して取得する
   */
  async getCards() {
    const series = await this.storage.getSeries()
    const cards = await this.getAll()

    if (series.length === 0) {
      return cards
    }

    let res: Card[] = []
    series.map((_s) => {
      if (_s.enable) {
        res = [...res, ...cards.filter((_card) => { return _card.series === _s.name })]
      }
    })
    return res
  }

  /**
   * 所得可能なカードをすべて所得し、ランダムな順番に並び替える
   * 
   * @returns ランダムな順番に並び替えられた所得可能なカードのリスト
   */
  async getRamdomCards(){
    const cards = await this.getCards()

    // 配列の値をランダムに入れ替える
    for (var i = cards.length - 1; i >= 0; i--){

      // 0~iのランダムな数値を取得
      var rand = Math.floor( Math.random() * ( i + 1 ) );
    
      // 配列の数値を入れ替える
      [cards[i], cards[rand]] = [cards[rand], cards[i]]
    }
    return cards
  }

}
