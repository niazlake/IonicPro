import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {AuthPage} from "../pages/auth/auth";
import {VerificationPage} from "../pages/verification/verification";
import {UserdataPage} from "../pages/userdata/userdata";
import {MenuPage} from "../pages/menu/menu";

@NgModule({
  declarations: [
    MyApp,
    AuthPage,
    VerificationPage,
    UserdataPage,
    MenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AuthPage,
    VerificationPage,
    UserdataPage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
