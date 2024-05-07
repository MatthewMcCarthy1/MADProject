import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DarkPaletteService } from '../dark-palette.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  darkModeEnabled!: boolean;
  selectedFont: string = 'Arial';
  selectedTextSize: string = 'medium';

  constructor(private router: Router, private alertController: AlertController, private darkPaletteService: DarkPaletteService) {}

  ngOnInit() {
    this.darkPaletteService.darkPalette$.subscribe(isDark => {
      this.darkModeEnabled = isDark;
    });

    // Retrieve selected font and text size from local storage
    const storedFont = localStorage.getItem('selectedFont');
    if (storedFont) {
      this.selectedFont = storedFont;
    }

    const storedTextSize = localStorage.getItem('selectedTextSize');
    if (storedTextSize) {
      this.selectedTextSize = storedTextSize;
    }
  }

  //dark mode light mode
  toggleDarkMode() {
    this.darkModeEnabled = this.darkModeEnabled;
    this.darkPaletteService.setDarkPalette(this.darkModeEnabled);
  }

  //chagne font
  onChangeFont(event: CustomEvent) {
    this.selectedFont = event.detail.value;
    localStorage.setItem('selectedFont', this.selectedFont);
    document.documentElement.style.setProperty('--ion-font-family', this.selectedFont);
  }

  // change text size
  onChangeTextSize(event: CustomEvent) {
    this.selectedTextSize = event.detail.value;
    localStorage.setItem('selectedTextSize', this.selectedTextSize);
    document.documentElement.style.setProperty('--selected-text-size', this.getSelectedTextSizeValue());
  }
  
  private getSelectedTextSizeValue() {
    switch (this.selectedTextSize) {
      case 'medium':
        return '16px'; // Default size
      case 'large':
        return '20px'; // Larger size
      case 'x-large':
        return '24px'; // Extra large size
      default:
        return '16px';
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }

  async confirmLogout() {
    const alert = await this.alertController.create({
      header: 'Are you sure you want to log out?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            // Do nothing if user selects "No"
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.logout(); // Log out user if they select "Yes"
          }
        }
      ]
    });

    await alert.present();
  }
}