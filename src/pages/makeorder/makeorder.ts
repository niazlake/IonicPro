import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarComponentOptions } from 'ion2-calendar';
import {FindPage} from "../find/find";
import {__NGTOOLS_PRIVATE_API_2} from "@angular/compiler-cli";
import {OrderPage} from "../order/order";
import {MainPage} from "../main/main";
import {MenuPage} from "../menu/menu";

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
    color: 'primary',
    pickMode: 'single',

  };
  masters = [
    {name: "Алина", avatar: "../assets/imgs/mona_lisa.jpg", favourite: true},
    {name: "Настя", avatar: "../assets/imgs/mona_lisa.jpg", favourite: false},
    {name: "Катя", avatar: "../assets/imgs/mona_lisa.jpg", favourite: false}
  ];
  namePage = this.navParams.get('page');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  find(){
    this.navCtrl.push(FindPage);
  }
  close(){
    if(this.namePage == 'MakeorderPage'){
      this.navCtrl.push(MainPage);
    }else if(this.namePage == 'OrderPage'){
      this.navCtrl.push(MenuPage);
    }
    // this.navCtrl.push(MainPage);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MakeorderPage');
  }
}
