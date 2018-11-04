import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { CardList } from '../../model/app-models';

/*
  Generated class for the CardListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardListProvider {

  constructor(public http: Http) {
  }

  async getAll(): Promise<CardList[]> {
    const cards = await this.http.get("assets/json/card-list.json").toPromise()
    return cards.json()["card-list"]
  }

}
