import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  salons = [
    {
      img: '../assets/imgs/Beautify-Salon.png',
      name: 'Название Салона',
      adress: 'Адрес',
      price: '2000 тг',
      service: 'Макияж',
      time: '1 час'
    },
    {
      img: '../assets/imgs/salon.png',
      name: 'Название Салона',
      adress: 'Адрес',
      price: '1000 тг',
      service: 'Укладка',
      time: '2 часа'
    },
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

}
