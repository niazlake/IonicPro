import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google:any;
/**
 * Generated class for the FindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find',
  templateUrl: 'find.html',
})
export class FindPage {
  Ordered:any = 'Yes';
  @ViewChild('map') mapRef:ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    this.DisplayMap();
  }
  DisplayMap(){
    const location = new google.maps.LatLng('50.283934', '57.166978');
    const options = {
      center: location,
      zoom: 10
    }
    const map = new google.maps.Map(this.mapRef.nativeElement, options);
  }
}
