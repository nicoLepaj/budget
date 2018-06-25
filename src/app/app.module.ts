import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ExpensesPage } from '../pages/expenses/expenses';
import { IncomePage } from '../pages/income/income';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AnalyticsPage } from '../pages/analytics/analytics';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// providers
import { CategoryProvider } from '../providers/category/category';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';

// pipes
import { RoundNumber } from '../pipes/round-number';
import { IncomeProvider } from '../providers/income/income-provider';





@NgModule({
  declarations: [
    MyApp,
    ExpensesPage,
    IncomePage,
    HomePage,
    TabsPage,
    AnalyticsPage,
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
    IncomePage,
    HomePage,
    AnalyticsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoryProvider,
    IncomeProvider
  ]
})
export class AppModule {}
