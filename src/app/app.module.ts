import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DarkPaletteService } from './dark-palette.service'; //dark palette service

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http'; //http client

import { Plugins } from '@capacitor/core'; // pluginss
const { Camera } = Plugins; 

import { IonicStorageModule } from '@ionic/storage-angular';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DarkPaletteService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
