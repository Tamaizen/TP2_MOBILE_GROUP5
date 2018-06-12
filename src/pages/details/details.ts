import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

import { Geolocation } from "@ionic-native/geolocation";
import { CallNumber } from "@ionic-native/call-number";
import { SMS } from "@ionic-native/sms";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { SQLite } from "@ionic-native/sqlite";


@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform:Platform, private iab:InAppBrowser, private geolocation: Geolocation, private sms: SMS, private callnumber: CallNumber, private sqlite: SQLite) {
    this.platform.ready().then(() =>{
        //Use phone for callnumber using default options
    this.callnumber.callNumber("18001010101", true)
        .then(res => console.log('launched dialer!', res))
        .then(err => console.log('Error launching dialer', err));
        //Send a text message using default options
    this.sms.send('416123456', 'Hello World!');
    })
}

  ionViewWillEnter(){
   this.getDetails()
  }

  getDetails(){



  }



}
