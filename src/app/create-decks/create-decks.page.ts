import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Storage } from '@ionic/storage-angular';

//folder interface for folder with notes
interface Folder {
  name: string | null;
  notes: string[];
  open?: boolean;
}

// Animnation for the flashcard
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
  folders: Folder[] = [];

  constructor(private navCtrl: NavController, private storage: Storage) { }

  //display the existing folder when laoding the page
  ngOnInit() {
    this.displayExistingFolders();
  }

  //go to settings page 
  goToSettings() {
    this.navCtrl.navigateForward('/settings'); 
  }

  //toggle the visibility of folder notes
  toggleFolderNotes(folder: Folder) {
    folder.open = !folder.open;

    // this saves the state of the folders
    this.storage.set('folders', JSON.stringify(this.folders)).then(() => {
      console.log('Folders state updated in Ionic Storage');
    }).catch((error) => {
      console.error('Error saving folders state:', error);
    });
  }

  //visibility of flashcard
  toggleFlashcard() {
    this.flashcardVisible = !this.flashcardVisible;
  }

  //edit the folder
  editFolder(folder: Folder) {
    const editedFolderName = prompt('Edit folder name', folder.name || '');
    if (editedFolderName === null) {
      return;
    }
    folder.name = editedFolderName;
    this.saveFolders();
  }

  //delete the folder
  deleteFolder(folder: Folder) {
    const index = this.folders.indexOf(folder);
    this.folders.splice(index, 1);
    this.saveFolders();
  }

  //edit the note
  editNote(folder: Folder, note: string) {
    const editedNote = prompt('Edit note', note);
    if (editedNote) {
      const index = folder.notes.indexOf(note);
      folder.notes[index] = editedNote;
      this.saveFolders();
    }
  }

  //delete the note
  deleteNote(folder: Folder, note: string) {
    const index = folder.notes.indexOf(note);
    folder.notes.splice(index, 1);
    this.saveFolders();
  }

  // Save the flashcard to a folder
  saveFlashCard() {
    if (this.flashcardContent.trim() !== '') {
      const selectedFolderName = prompt('Enter folder name (existing or new):');
      const selectedFolder = this.folders.find(folder => folder.name === selectedFolderName);
  
      if (selectedFolder) {
        selectedFolder.notes.push(this.flashcardContent);
      } else {
        const newFolder: Folder = { name: selectedFolderName, notes: [this.flashcardContent] };
        this.folders.push(newFolder);
      }
  
      //save updated folders list to storage
      this.storage.set('folders', JSON.stringify(this.folders)).then(() => {
        //Display newly added folder
        this.displayExistingFolders();
        this.flashcardContent = ''; //Clear the text area
      });
    }
  }

  // display existing folders from storage
  displayExistingFolders() {
    this.storage.create().then(() => {
      this.storage.get('folders').then((folders) => {
        if (folders) {
          this.folders = JSON.parse(folders) || [];
        }
      });
    }).catch((error) => {
      console.error('Error creating storage:', error);
    });
  }

  //save the folders to storage
  saveFolders() {
    this.storage.set('folders', JSON.stringify(this.folders)).then(() => {
      this.displayExistingFolders();
      this.flashcardContent = '';
    });
  }
}