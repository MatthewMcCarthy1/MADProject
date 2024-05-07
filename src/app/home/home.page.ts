import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize the dark palette based on the initial value of the prefers-color-scheme media query
    this.initializeDarkPalette(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkPalette(mediaQuery.matches));
  }

  initializeDarkPalette(isDark : boolean) {
    this.toggleDarkPalette(isDark);
  }

  toggleDarkPalette(shouldAdd: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }

  goToTips() {
    this.navCtrl.navigateForward('/tips'); //Navigate to the tips page
  }

  goToSettings() {
    this.navCtrl.navigateForward('/settings'); // Navigate to the settings page
  }

  welcomeMessage = "Welcome to the FlashCard App! ᵔᴗᵔ";

  // Main features of the app
  features = [
    {
      icon: 'book-outline', 
      title: 'Create Custom Decks',
      description: 'Build personalized decks for different subjects or topics.',
    },
    {
      icon: 'scan-outline',
      title: 'Smart Camera',
      description: 'Have physical flash cards and want to store them for easy access?',
    },
    {
      icon: 'shuffle-outline',
      title: 'Randomized Quizzes',
      description: 'Test your knowledge with randomized quizzes from your decks.',
    },
    {
      icon: 'search-outline',
      title: 'Smart Search',
      description: 'Quickly find specific cards using our powerful search feature.',
    },
  ];

  navigateToFeaturePage(feature: any) {
    switch (feature.title) {
      case 'Create Custom Decks':
        this.navCtrl.navigateForward('/create-decks'); 
        break;
      case 'Smart Camera':
      this.navCtrl.navigateForward('/smart-camera'); 
      break;
      case 'Randomized Quizzes':
        this.navCtrl.navigateForward('/quizzes'); 
        break;
      case 'Smart Search':
        this.navCtrl.navigateForward('/search'); 
        break;
      default:
        break;
    }
  }
}
