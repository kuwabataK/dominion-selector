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

  async getAll(): Promise<Card[]> {
    const cards = await this.http.get("assets/json/card-list.json").toPromise()
    return cards.json()["cards"]
  }

  async getCards() {
    const series = await this.storage.getSeries()
    const cards = await this.getAll()

    if (series.length === 0) {
      return cards
    }

    let res: Card[] = []
    series.map((_s) => {
      if (_s.enable) {
        res = res.concat(cards.filter((_card) => { return _card.series === _s.name }))
      }
    })
    return res
  }

}
