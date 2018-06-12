import { Component } from '@angular/core';
import { AlertController, NavController, ToastController } from 'ionic-angular';
import { CategoryProvider } from '../../providers/category/category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  reorderIsEnabled = false;

  constructor(
    public navCtrl: NavController,
    public alertController: AlertController,
    public toastController: ToastController,
    public categoryProvider: CategoryProvider
  ) {

    
  }

  ionViewDidLoad() {
    this.categoryProvider.load();
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

            this.categoryProvider.categories.push(category);
            this.categoryProvider.updateCategory(category);

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
            this.categoryProvider.categories.splice(index, 1);
            this.categoryProvider.sumAmount();
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

            this.categoryProvider.updateCategory(category);

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


  toggleReorder() {
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  itemReordered($event) {
    this.categoryProvider.itemReordered($event)
  }




}
