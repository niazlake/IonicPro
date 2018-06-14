import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from "../menu/menu";
import {V} from "@angular/core/src/render3";
import {VerificationPage} from "../verification/verification";

/**
 * Generated class for the UserdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userdata',
  templateUrl: 'userdata.html',
})
export class UserdataPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  save(){
    this.navCtrl.push(MenuPage);
  }
  back(){
    this.navCtrl.push(VerificationPage)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserdataPage');
  }

}
