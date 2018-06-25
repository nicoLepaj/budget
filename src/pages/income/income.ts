import { Component } from '@angular/core';
import { NavController, AlertController, ToastController} from 'ionic-angular';
import { IncomeProvider } from '../../providers/income/income-provider';

@Component({
  selector: 'page-income',
  templateUrl: 'income.html'
})
export class IncomePage {

  reorderIsEnabled = false;
  incomes: any = [];

  constructor(
    public navCtrl: NavController,
    public incomeProvider: IncomeProvider,
    public toastController: ToastController,
    public alertController: AlertController
  ) {
  }

ionViewDidLoad(){
  this.incomeProvider.load();
}

toggleReorder() {
  this.reorderIsEnabled = !this.reorderIsEnabled;
}

itemReordered(event) {
  this.incomeProvider.itemReordered(event)
}

deleteIncome(income, index, slidingItem) {
  let deleteIncomeAlert = this.alertController.create({
    title: "Are you sure ?",
    message: "Delete income",
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
          this.incomeProvider.incomes.splice(index, 1);
          this.incomeProvider.sumAmount();
        }
      }
    ]
  });
  deleteIncomeAlert.present();

}


editIncome(income, slidingItem) {

  let editIncomeAlert = this.alertController.create({
    title: "Edit Income",
    message: "Change Income Name",
    inputs: [
      {
        type: "text",
        name: "editIncomeName",
        value: income.name
      },
      {
        type: "number",
        name: "editIncomeAmount",
        value: income.amount
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
        text: "Edit Income",
        handler: (inputData) => {
          income.name = inputData.editIncomeName;

          income.amount = Number(inputData.editIncomeAmount);

          this.incomeProvider.updateIncome(income);

          editIncomeAlert.onDidDismiss(() => {
            let editIncomeToast = this.toastController.create({
              message: "Income Edited",
              duration: 2000,
              position: "top"
            });
            editIncomeToast.present();
            slidingItem.close();
          });
        }
      }
    ]
  });
  editIncomeAlert.present();
}




}
