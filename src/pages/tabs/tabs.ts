import { Component, ViewChild } from '@angular/core';

import { ExpensesPage } from '../expenses/expenses';
import { IncomePage } from '../income/income';
import { HomePage } from '../home/home';
import { AnalyticsPage } from '../analytics/analytics';

import { IncomeProvider } from '../../providers/income/income-provider';
import { CategoryProvider } from '../../providers/category/category';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef;
  tab1Root = HomePage;
  tab2Root = ExpensesPage;
  tab3Root = IncomePage;
  tab4Root = AnalyticsPage;

  tabIndex: number = 0;

  constructor(
    public categoryProvider: CategoryProvider,
    public incomeProvider: IncomeProvider

  ) {
    this.categoryProvider.load();
  }

  getTabIndex() {
    this.tabIndex = this.tabRef.getSelected().index;
  }

  create() {
    if (this.tabRef.getSelected().index === 0) {
      this.categoryProvider.createCategory();
    }
    else if (this.tabRef.getSelected().index === 3) {
        this.incomeProvider.createIncome();
    }

  }
}
