import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ExpensesPage } from '../pages/expenses/expenses';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// providers
import { CategoryProvider } from '../providers/category/category';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';

// pipes
import { RoundNumber } from '../pipes/round-number';





@NgModule({
  declarations: [
    MyApp,
    ExpensesPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProgressBarComponent,
    RoundNumber
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ExpensesPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoryProvider
  ]
})
export class AppModule {}
