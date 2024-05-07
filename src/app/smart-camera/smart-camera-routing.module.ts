import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartCameraPage } from './smart-camera.page';

const routes: Routes = [
  {
    path: '',
    component: SmartCameraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartCameraPageRoutingModule {}
