import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from "../menu/menu";
import {V} from "@angular/core/src/render3";
import {VerificationPage} from "../verification/verification";
import { FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";
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
  formgroup: FormGroup;
  name: AbstractControl;
  phonenum: AbstractControl;
  gender: AbstractControl;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public formbuilder: FormBuilder) {
    this.formgroup = formbuilder.group({
      name: ['', Validators.required],
      phonenum:['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      gender:['',Validators.required]
    });
    this.name = this.formgroup.controls['name'];
    this.phonenum = this.formgroup.controls['phonenum'];
    this.gender = this.formgroup.controls['gender'];
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
