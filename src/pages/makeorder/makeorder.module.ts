import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakeorderPage } from './makeorder';

@NgModule({
  declarations: [
    MakeorderPage,
  ],
  imports: [
    IonicPageModule.forChild(MakeorderPage),
  ],
})
export class MakeorderPageModule {}
