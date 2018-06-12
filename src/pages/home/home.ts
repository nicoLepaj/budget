import { Component } from '@angular/core';
import { NavController, reorderArray } from 'ionic-angular';
import { CategoryProvider } from '../../providers/category/category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  reorderIsEnabled = false;

  constructor(
    public navCtrl: NavController,
    public categoryProvider: CategoryProvider
  ) {
  }

  ionViewDidLoad() {
    this.categoryProvider.load();
  }

  createCategory() {
    this.categoryProvider.createCategory();
  }

  editCategory(categoryIndex) {
    this.categoryProvider.editCategory(categoryIndex);
  }

  deleteCategory(categoryIndex) {
    this.categoryProvider.deleteCategory(categoryIndex);
  }

  toggleReorder() {
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  itemReordered($event) {
    this.categoryProvider.itemReordered($event)
  }

}
