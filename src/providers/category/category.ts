import { Injectable } from '@angular/core';
import { reorderArray, AlertController, ToastController } from 'ionic-angular';

@Injectable()
export class CategoryProvider {

  categories: any = [];
  totalAmount: number = 0;



  constructor(
    public alertController: AlertController,
    public toastController: ToastController
  ) {
  }

  load() {
    this.categories = [
      { name: "RentBLABLABLABLABLABLABLA", amount: 100, spent: 0 },
      { name: "Groceries", amount: 100, spent: 30 },
      { name: "Bills", amount: 100, spent: 60 },
      { name: "Car", amount: 100, spent: 80 },
      { name: "Social", amount: 100, spent: 101, },
      { name: "cat1", amount: 100, spent: 80 },
      { name: "cat2", amount: 100, spent: 80 },
      { name: "cat3", amount: 100, spent: 80 },
      { name: "cat4", amount: 100, spent: 80 },
      { name: "cat5", amount: 100, spent: 80 },
      { name: "cat6", amount: 100, spent: 80 },
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

  createCategory() {
    let createCategoryAlert = this.alertController.create({
      title: "Create a Category",
      inputs: [
        {
          type: "text",
          placeholder: "Name",
          name: "addCategoryName"
        },
        {
          type: "number",
          placeholder: "Amount",
          name: "addCategoryAmount"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Create",
          handler: (inputData) => {

            let category = {
              name: inputData.addCategoryName,
              amount: Number(inputData.addCategoryAmount),
              spent: 0
            };

            this.categories.push(category);
            this.updateCategory(category);

            createCategoryAlert.onDidDismiss(() => {
              let createCategoryToast = this.toastController.create({
                message: "Category Created",
                duration: 2000,
                position: "top"
              });
              createCategoryToast.present();
            });
          }
        }
      ]
    });
    createCategoryAlert.present();

  }

}
