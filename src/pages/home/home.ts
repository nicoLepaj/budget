import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  editCategory(category) {
    this.categoryProvider.editCategory(category);
  }

  deleteCategory(category, index) {
    this.categoryProvider.deleteCategory(category, index);
  }

  toggleReorder() {
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  itemReordered($event) {
    this.categoryProvider.itemReordered($event)
  }

}
