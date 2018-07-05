import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryProvider } from '../../providers/category/category';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  category : any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public categoryProvider: CategoryProvider
   ) {

    //console.log(this.navParams.get('catData'));

     this.category = {
       name:this.navParams.get('name'),
       amount:this.navParams.get('amount'),
       spent: this.navParams.get('spent')
     };
  }

  ionViewDidLoad(){

  }

}
