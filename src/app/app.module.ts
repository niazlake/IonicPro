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
import {FindPage} from "../pages/find/find";
import {MainPage} from "../pages/main/main";
import {FavoritesPage} from "../pages/favorites/favorites";
import {OrderPage} from "../pages/order/order";
import {MakeorderPage} from "../pages/makeorder/makeorder";
import { CalendarModule } from "ion2-calendar";

@NgModule({
  declarations: [
    MyApp,
    AuthPage,
    VerificationPage,
    UserdataPage,
    MenuPage,
    FindPage,
    MainPage,
    FavoritesPage,
    OrderPage,
    MakeorderPage
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AuthPage,
    VerificationPage,
    UserdataPage,
    MenuPage,
    FindPage,
    MainPage,
    FavoritesPage,
    OrderPage,
    MakeorderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
