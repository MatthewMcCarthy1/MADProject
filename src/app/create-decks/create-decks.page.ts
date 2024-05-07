import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-create-decks',
  templateUrl: './create-decks.page.html',
  styleUrls: ['./create-decks.page.scss'],
  animations: [
    trigger('flashcardAnimation', [
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      state('hidden', style({
        transform: 'translateY(100%)',
        opacity: 0
      })),
      transition('visible => hidden', [
        animate('0.5s')
      ]),
      transition('hidden => visible', [
        animate('0.5s')
      ])
    ])
  ]
})
export class CreateDecksPage implements OnInit {

  flashcardContent: string = '';
  flashcardVisible: boolean = false;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToSettings() {
    this.navCtrl.navigateForward('/settings'); 
  }

  toggleFlashcard() {
    this.flashcardVisible = !this.flashcardVisible;
  }

  saveFlashCard() {
    //need to figure out how to create folders and save to database 
  }

  

}