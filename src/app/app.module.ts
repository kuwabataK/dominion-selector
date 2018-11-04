import { BrowserModule } from '@angular/platform-browser';
import { SwipeCardsModule } from 'ng2-swipe-cards';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { CardListProvider } from '../providers/card-list/card-list';
import {HttpModule} from '@angular/http';
import { ResultPage } from '../pages/result/result';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
    ResultPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SwipeCardsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
    ResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CardListProvider,
  ]
})
export class AppModule {}
