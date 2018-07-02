import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarComponentOptions } from 'ion2-calendar';

/**
 * Generated class for the MakeorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-makeorder',
  templateUrl: 'makeorder.html',
})
export class MakeorderPage {
  dateMulti: string[];
  type: 'string';
  options: CalendarComponentOptions = {

    pickMode: 'single',

  };

  masters = [
    {name: "Алина", avatar: "../assets/imgs/mona_lisa.jpg", favourite: true},
    {name: "Настя", avatar: "../assets/imgs/mona_lisa.jpg", favourite: false},
    {name: "Катя", avatar: "../assets/imgs/mona_lisa.jpg", favourite: false}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakeorderPage');
  }
}
