import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {

  constructor(private alertController: AlertController) {}

  ionViewDidEnter() {
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Page in Development',
      message: 'Sorry, this page is still in development!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('OK clicked');
            // Redirect to the home pagea
            window.location.href = "home";
          }
        }
      ]
    });

    await alert.present();
  }

}
