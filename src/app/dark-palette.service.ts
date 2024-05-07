import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkPaletteService {
  private darkPaletteSubject = new BehaviorSubject<boolean>(false);
  darkPalette$ = this.darkPaletteSubject.asObservable();

  constructor() {
    // Check the user's preference for dark mode on initialization
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.setDarkPalette(prefersDark.matches);
  }

  setDarkPalette(isDark: boolean) {
    this.darkPaletteSubject.next(isDark);
    if (isDark) {
      document.documentElement.classList.add('ion-palette-dark');
      document.documentElement.style.setProperty('--ion-text-color', '#FFFFFF');
    } else {
      document.documentElement.classList.remove('ion-palette-dark');
      document.documentElement.style.setProperty('--ion-text-color', '#000000');
    }
  }
}