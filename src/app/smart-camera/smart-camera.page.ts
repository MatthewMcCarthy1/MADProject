import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

// necessary pluginsn from capacitor 
import { Plugins } from '@capacitor/core';
import { Camera as CapacitorCamera } from '@capacitor/camera';

// destruct the camera plugin from plugins for easier access
const { Camera: PluginsCamera } = Plugins;

@Component({
  selector: 'app-smart-camera',
  templateUrl: './smart-camera.page.html',
  styleUrls: ['./smart-camera.page.scss'],
})
export class SmartCameraPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    //register the camera plugin 
    PluginsCamera['registerPlugin'](CapacitorCamera); 
  }

  async openCamera() {
    try {
      //capture the photo
      const photo = await PluginsCamera['getPhoto']({  
        quality: 100,
        allowEditing: false,
        resultType: 'dataUrl'
      });
      //confirm capture taken
      console.log('Photo taken:', photo);

    } catch (error) {
      //error handling
      console.error('Error taking picture: ', error);
    }
  }

  //navigate to the settings page
  goToSettings() {
    this.navCtrl.navigateForward('/settings');
  }
}