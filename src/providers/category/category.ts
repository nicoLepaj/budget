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
      { name: "Rent", amount: 5, spent: 0 },
      { name: "Groceries", amount: 5, spent: 0 },
      { name: "Bills", amount: 5, spent: 0 },
      { name: "Car", amount: 5, spent: 0 },
      { name: "Social", amount: 5, spent: 0 }
    ];
    this.sumAmount();
    this.categories.forEach((category) => {
    this.showProgress(category);
    })

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
              amount: Number(inputData.addCategoryAmount),
              spent: 0
            };

            this.categories.push(category);
            this.sumAmount();


            createCategoryAlert.onDidDismiss(() => {
              let createCategoryToast = this.toastController.create({
                message: "Category Created",
                duration: 2000,
                position: "middle"
              });
              createCategoryToast.present();
            });
          }
        }
      ]
    });
    createCategoryAlert.present();

  }

  deleteCategory(category, index) {
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
            console.log(index);
            this.categories.splice(index, 1);
            this.sumAmount();
          }
        }
      ]
    });
    deleteCategoryAlert.present();

  }


  editCategory(category) {
    let editCategoryAlert = this.alertController.create({
      title: "Edit Category",
      message: "Change Category Name",
      inputs: [
        {
          type: "text",
          name: "editCategoryName",
          value: category.name
        },
        {
          type: "number",
          name: "editCategoryAmount",
          value: category.amount
        }
      ],
      buttons: [
        {
          text: "cancel"
        },
        {
          text: "Edit Category",
          handler: (inputData) => {
            category.name = inputData.editCategoryName;

            category.amount = Number(inputData.editCategoryAmount);

            this.sumAmount();

            editCategoryAlert.onDidDismiss(() => {
              let editCategoryToast = this.toastController.create({
                message: "Category Edited",
                duration: 2000,
                position: "middle"
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






  showProgress(category) {
    category.progress = (category.spent / category.amount) * 100;
  }

}
