import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryProvider } from '../../providers/category/category';
import { DetailsPage } from '../details/details';


@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public categoryProvider: CategoryProvider,
  ) {
  }

  openDetails(category) {
    let catData = {
      name: category.name,
      amount: category.amount,
      spent: category.spent
    };

    this.navCtrl.push(DetailsPage, catData)
  }

}
