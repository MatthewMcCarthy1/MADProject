import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateDecksPage } from './create-decks.page';

const routes: Routes = [
  {
    path: '',
    component: CreateDecksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateDecksPageRoutingModule {}
