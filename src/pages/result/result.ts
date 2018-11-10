import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Card } from '../../model/app-models';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  view_mode: "cards" | "list" = "cards"

  cards: Card[] = []

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.cards = this.navParams.get('cards')
    this.cards.sort((a,b)=>{return a.cost - b.cost})
  }

  ionViewDidLoad() {
  }

}
