import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ToastController, reorderArray } from 'ionic-angular';

@Injectable()
export class CategoryProvider {

  categories: any = [];
  totalAmount: number = 0;

  constructor(
    public http: HttpClient,
    public alertController: AlertController,
    public toastController: ToastController
  ) {
  }

  load() {
    this.categories = [
      { name: "Rent", amount: 5 },
      { name: "Groceries", amount: 5 },
      { name: "Bills", amount: 5 },
      { name: "Car", amount: 5 },
      { name: "Social", amount: 5 },
    ];
    this.sumAmount();
  }


  sumAmount() {
    this.totalAmount = 0;
    this.categories.forEach((category) => {
      this.totalAmount = this.totalAmount + category.amount;
    })
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
              amount: Number(inputData.addCategoryAmount)
            };

            this.categories.push(category);
            this.sumAmount();


            createCategoryAlert.onDidDismiss(() => {
              let createCategoryToast = this.toastController.create({
                message: "Category Created",
                duration: 2000
              });
              createCategoryToast.present();
            });
          }
        }
      ]
    });
    createCategoryAlert.present();

  }

  deleteCategory(categoryIndex) {
    let deleteCategoryAlert = this.alertController.create({
      title: "Are you sure ?",
      message: "Delete category",
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Delete",
          handler: () => {
            this.categories.splice(categoryIndex, 1);
            this.sumAmount();
          }
        }
      ]
    });
    deleteCategoryAlert.present();

  }


  editCategory(categoryIndex) {
    let editCategoryAlert = this.alertController.create({
      title: "Edit Category",
      message: "Change Category Name",
      inputs: [
        {
          type: "text",
          name: "editCategoryName",
          value: this.categories[categoryIndex].name
        },
        {
          type: "number",
          name: "editCategoryAmount",
          value: this.categories[categoryIndex].amount
        }
      ],
      buttons: [
        {
          text: "cancel"
        },
        {
          text: "Edit Category",
          handler: (inputData) => {
            this.categories[categoryIndex].name = inputData.editCategoryName;

            this.categories[categoryIndex].amount = Number(inputData.editCategoryAmount);

            this.sumAmount();

            editCategoryAlert.onDidDismiss(() => {
              let editCategoryToast = this.toastController.create({
                message: "Category Edited",
                duration: 2000
              });
              editCategoryToast.present();
            });
          }
        }
      ]
    });
    editCategoryAlert.present();
  }


  itemReordered($event) {
    reorderArray(this.categories, $event)
  }

  addSpent(category) {
    category.spent = 5;
  }

}
