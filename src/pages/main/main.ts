import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {OrderPage} from "../order/order";
import {MakeorderPage} from "../makeorder/makeorder";

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }
  openModal(characterNum) {
    const modal = this.modalCtrl.create(OrderPage, characterNum, {cssClass: "modal-fullscreen"});
    modal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  makeOrder(){
    this.navCtrl.push(MakeorderPage);
  }
  doRefresh(refresher){
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
