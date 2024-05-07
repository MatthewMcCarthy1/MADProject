import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmartCameraPageRoutingModule } from './smart-camera-routing.module';

import { SmartCameraPage } from './smart-camera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmartCameraPageRoutingModule
  ],
  declarations: [SmartCameraPage]
})
export class SmartCameraPageModule {}
