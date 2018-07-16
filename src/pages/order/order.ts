import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import {MainPage} from "../main/main";
import {MakeorderPage} from "../makeorder/makeorder";
import {MenuPage} from "../menu/menu";

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  salon;
  constructor(public navParams: NavParams, public platform: Platform, public viewCtrl: ViewController, public navCtrl: NavController) {
    var charNum = navParams.get('charNum');
    var salons = [
      {
        name: 'Beautify',
        slider:[
          {img: "../assets/imgs/images.jpg"},
          {img: "../assets/imgs/0f70a92c23250dfa4dc7a6389b441068.png"},
          {img: "../assets/imgs/beautify_script.png"}
        ],
        star: 4,
        adress: 'Адрес',
        time: '9:00 - 18:00',
        services: [
          {name: 'Улсуга 1'},
          {name: 'Услуга 2'},
          {name: 'Услуга 3'}
        ]
      },
      {
        name: 'Beautify',
        slider:[
          {img: "../assets/imgs/images.jpg"},
          {img: "../assets/imgs/0f70a92c23250dfa4dc7a6389b441068.png"},
          {img: "../assets/imgs/beautify_script.png"}
        ],
        star: 4,
        adress: 'Адрес',
        time: '9:00 - 18:00',
        services: [
          {name: 'Улсуга 1'},
          {name: 'Услуга 2'},
          {name: 'Услуга 3'}
        ]
      },


    ];
    this.salon = salons[charNum];
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }
  makeOrder(){
    this.navCtrl.push(MakeorderPage, {page: 'OrderPage'});
  }
}
