import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { reorderArray, AlertController, ToastController } from 'ionic-angular';


@Injectable()
export class IncomeProvider {

  incomes: any = [];

  constructor(
    public http: HttpClient,
    public alertController: AlertController,
    public toastController: ToastController
  ) {
  }

  createIncome() {
    let createIncomeAlert = this.alertController.create({
      title: "Add an Income",
      inputs: [
        {
          type: "text",
          placeholder: "Income name",
          name: "addIncomeName"
        },
        {
          type: "number",
          placeholder: "Income amount",
          name: "addIncomeAmount"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add",
          handler: (inputData) => {

            let income = {
              name: inputData.addIncomeName,
              amount: Number(inputData.addIncomeAmount)
            };

            this.incomes.push(income);


            createIncomeAlert.onDidDismiss(() => {
              let createIncomeToast = this.toastController.create({
                message: "Income Added",
                duration: 2000,
                position: "top"
              });
              createIncomeToast.present();
            });
          }
        }
      ]
    });
    createIncomeAlert.present();

  }






}
