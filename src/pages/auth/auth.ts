import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {VerificationPage} from "../verification/verification";
import { FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";
import {UserdataPage} from "../userdata/userdata";

/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {
  formgroup: FormGroup;
  phonenum: AbstractControl;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public formbuilder: FormBuilder, public loadingCtrl: LoadingController) {

    this.formgroup = formbuilder.group({
      phonenum:['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]]
    });
    this.phonenum = this.formgroup.controls['phonenum'];

  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    setTimeout(() => {}, 1000);
    loader.present();

  }
  ionViewDidLoad() {
    this.presentLoading();
    console.log('ionViewDidLoad AuthPage');
  }
  ver(){
    this.navCtrl.push(VerificationPage);
  }
}
