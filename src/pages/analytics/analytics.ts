import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { CategoryProvider } from '../../providers/category/category';
import { IncomeProvider } from '../../providers/income/income-provider';

@Component({
  selector: 'page-analytics',
  templateUrl: 'analytics.html',
})
export class AnalyticsPage {

  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('doughnutCanvasTwo') doughnutCanvasTwo;

  doughnutChart: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public categoryProvider: CategoryProvider,
    public incomeProvider: IncomeProvider
  ) {

  }

  // forLabels(){
  //
  //     let labels = [];
  //
  //     this.categoryProvider.categories.forEach((category) => {
  //       labels.push(category.name);
  //     });
  //     return labels;
  // }

  budgetLabels() {
    return this.categoryProvider.categories.map((category) => {
      return category.name;
    });
  }

  incomeLabels() {
    return this.incomeProvider.incomes.map((income) => {
      return income.name;
    });
  }

  incomeData() {
    return this.incomeProvider.incomes.map((income) => {
      return income.amount;
    });
  }

  budgetData() {
    return this.categoryProvider.categories.map((category) => {
      return category.amount;
    });
  }

  forColor() {

    let colors = [];

    let letters = '0123456789ABCDEF'.split('');

    for (let i = 0; i < this.categoryProvider.categories.length; i++) {
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color = color + letters[Math.floor(letters.length * Math.random())];
      }

      colors.push(color);
    }
    console.log(colors);
    return colors;
  }


  ionViewDidEnter() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'doughnut',
      data: {
        labels: this.budgetLabels(),
        datasets: [{
          label: 'budget split',
          data: this.budgetData(),
          backgroundColor: [
            'rgba(107, 212, 37, 0.9)',
            'rgba(228, 87, 46, 0.9)',
            'rgba(23, 190, 187, 0.9)',
            'rgba(255, 201, 20, 0.9)',
            'rgba(136, 73, 143, 0.9)',
            'rgba(255, 159, 28, 0.9)',
            'rgba(0, 59, 54, 0.9)',
            'rgba(4, 139, 168, 0.9)',
            'rgba(116, 18, 29, 0.9)',
            'rgba(128, 26, 134, 0.9)'
          ]
        }]
      }
    });

    this.doughnutChart = new Chart(this.doughnutCanvasTwo.nativeElement, {

      type: 'doughnut',
      data: {
        labels: this.incomeLabels(),
        datasets: [{
          label: 'income split',
          data: this.incomeData(),
          backgroundColor: [
            'rgba(107, 212, 37, 0.9)',
            'rgba(228, 87, 46, 0.9)',
            'rgba(23, 190, 187, 0.9)',
            'rgba(255, 201, 20, 0.9)',
            'rgba(136, 73, 143, 0.9)',
            'rgba(255, 159, 28, 0.9)',
            'rgba(0, 59, 54, 0.9)',
            'rgba(4, 139, 168, 0.9)',
            'rgba(116, 18, 29, 0.9)',
            'rgba(128, 26, 134, 0.9)'
          ],
          hoverBackgroundColor: []
        }]
      }

    });


  }

}
