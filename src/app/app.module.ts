import { BrowserModule } from '@angular/platform-browser';
import { SwipeCardsModule } from 'ng2-swipe-cards';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { CardListProvider } from '../providers/card-list/card-list';
import {HttpModule} from '@angular/http';
import { ResultPage } from '../pages/result/result';
import 'hammerjs';
import { SettingPage } from '../pages/setting/setting';
import { TinderRemoveCardModePage } from '../pages/tinder-remove-card-mode/tinder-remove-card-mode';
import { IonicStorageModule } from '@ionic/storage';
import { StorageProvider } from '../providers/storage/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResultPage,
    SettingPage,
    TinderRemoveCardModePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    SwipeCardsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResultPage,
    SettingPage,
    TinderRemoveCardModePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CardListProvider,
    StorageProvider,
  ]
})
export class AppModule {}
