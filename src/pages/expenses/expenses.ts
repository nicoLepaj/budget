import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoryProvider } from '../../providers/category/category';

@Component({
  selector: 'page-expenses',
  templateUrl: 'expenses.html'
})
export class ExpensesPage {

  constructor(
    public navCtrl: NavController,
    public categoryProvider: CategoryProvider
  ) {
  }

  addSpent(category) {
    this.categoryProvider.addSpent(category);
  }

}
