import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {VerificationPage} from "../verification/verification";
import { FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";

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
              public formbuilder: FormBuilder) {

    this.formgroup = formbuilder.group({
      phonenum:['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]]
    });
    this.phonenum = this.formgroup.controls['phonenum'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthPage');
  }
  ver(){
    this.navCtrl.push(VerificationPage);
  }
}
