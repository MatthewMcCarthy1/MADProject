import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateDecksPageRoutingModule } from './create-decks-routing.module';

import { CreateDecksPage } from './create-decks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateDecksPageRoutingModule
  ],
  declarations: [CreateDecksPage]
})
export class CreateDecksPageModule {}
