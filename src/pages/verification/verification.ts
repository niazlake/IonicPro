///<reference path="../userdata/userdata.ts"/>
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {UserdataPage} from "../userdata/userdata";
import {MenuPage} from "../menu/menu";

/**
 * Generated class for the VerificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verification',
  templateUrl: 'verification.html',
})
export class VerificationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    setTimeout(() => {
      this.navCtrl.push(MenuPage);
    }, 1000);
    loader.present();

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VerificationPage');
  }
}
