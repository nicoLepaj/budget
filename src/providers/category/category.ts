import { Injectable } from '@angular/core';
import { reorderArray } from 'ionic-angular';

@Injectable()
export class CategoryProvider {

  categories: any = [];
  totalAmount: number = 0;


  constructor(
  ) {
  }

  load() {
    this.categories = [
      { name: "Rent", amount: 100, spent: 0 },
      { name: "Groceries", amount: 100, spent: 50 },
      { name: "Bills", amount: 100, spent: 66 },
      { name: "Car", amount: 100, spent: 95 },
      { name: "Social", amount: 100, spent: 110 }
    ];
    this.sumAmount();
    this.categories.forEach((category) => {
      this.showProgress(category);
    })

  }

  updateCategory(category) {
    this.sumAmount();
    this.showProgress(category);
  }

  sumAmount() {
    this.totalAmount = 0;
    this.categories.forEach((category) => {
      this.totalAmount = this.totalAmount + category.amount;
    })
  }

  showProgress(category) {
    category.progress = (category.spent / category.amount) * 100;
  }

  itemReordered($event) {
    reorderArray(this.categories, $event)
  }

}
