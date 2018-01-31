import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//Documentacao em documents/icon

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nomeUsuario :string = "Anônimo";
  public datadia:Date = new Date;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public alertaUsuario(dataHoje:Date):void{
    alert(" Seja Bem Vindo " + this.nomeUsuario + " HOJE É DIA " + dataHoje);

  }

  ionViewDidLoad() {

   // this.alertaUsuario(this.datadia.getDate());
    //console.log('ionViewDidLoad FeedPage');
  }

}
