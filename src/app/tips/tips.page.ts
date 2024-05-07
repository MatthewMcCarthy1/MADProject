import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
})
export class TipsPage implements OnInit{

  jsonData: any;

  constructor(private navCtrl: NavController, private http: HttpClient, private alertController: AlertController) { }

  ngOnInit(): void {
    this.showInfoAlert();
    this.fetchDataFromExternalURL();
  }

  fetchDataFromExternalURL() {
    const url = 'https://jsonblob.com/api/jsonblob/1208026950785687552';
    this.http.get(url).subscribe((data: any) => {
      this.jsonData = data;
      console.log('Data fetched successfully:', this.jsonData);
    }, error => {
      console.error('Error fetching data:', error);
    });
  }

  async showInfoAlert() {
    const alert = await this.alertController.create({
      header: 'Quick message',
      message: 'The content on this page is not what I had planned. I wanted to try storing actual study tips but I could not figure out how to get it to work. Instead, I have used the JSON URL from one of the labs for now.',
      buttons: ['OK']
    });

    await alert.present();
  }

  goToSettings() {
    this.navCtrl.navigateForward('/settings');
  }
}