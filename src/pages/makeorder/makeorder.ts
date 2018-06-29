import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {months} from "moment";

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
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: this.selectedDay

  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakeorderPage');
  }
  onViewTitleChanged(title){
    this.viewTitle = title;
  }
  selectTime(){

  }
}
