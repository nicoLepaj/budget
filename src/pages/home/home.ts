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



  deleteCategory(category, index, slidingItem) {
    let deleteCategoryAlert = this.alertController.create({
      title: "Are you sure ?",
      message: "Delete category",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            slidingItem.close();
          }
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


  editCategory(category, slidingItem) {

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
          text: "cancel",
          role: "cancel",
          handler: () => {
            slidingItem.close();
          }
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
                position: "top"
              });
              editCategoryToast.present();
              slidingItem.close();
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
