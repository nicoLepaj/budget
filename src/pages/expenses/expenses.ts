import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { CategoryProvider } from '../../providers/category/category';

@Component({
  selector: 'page-expenses',
  templateUrl: 'expenses.html'
})
export class ExpensesPage {

  constructor(
    public navCtrl: NavController,
    public categoryProvider: CategoryProvider,
    public alertController: AlertController,
    public toastController: ToastController
  ) {
  }

  addSpent(category) {
    let addSpentAlert = this.alertController.create({
      title: "Add to " + category.name,
      inputs: [
        {
          type: "number",
          name: "addSpentAmount",
          placeholder: "Amount spent"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add",
          handler: (inputData) => {
            category.spent = category.spent + Number(inputData.addSpentAmount);

            this.categoryProvider.sumSpentAmount();
            this.categoryProvider.showProgress(category);
          //  this.navCtrl.parent.select(0);

            addSpentAlert.onDidDismiss(() => {
              let addSpentToast = this.toastController.create({
                message: inputData.addSpentAmount + " € added to " + category.name,
                duration: 2000,
                position: "top"
              });
              addSpentToast.present();
            });
          }
        }
      ]
    });
    addSpentAlert.present();

  }


}
