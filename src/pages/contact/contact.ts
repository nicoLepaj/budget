import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IncomeProvider } from '../../providers/income/income-provider';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class IncomePage {

  constructor(
    public navCtrl: NavController,
    public incomeProvider: IncomeProvider
  ) {

  }


}
