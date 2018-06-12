import { Component } from '@angular/core';

import { ExpensesPage } from '../expenses/expenses';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ExpensesPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
