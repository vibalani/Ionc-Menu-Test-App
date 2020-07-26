import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NotePageComponent } from './note-page/note-page.page';

@Injectable({
  providedIn: 'root'
  })

export class LocalStorageService {

  private noteId = 1;

  constructor(private storage: Storage) { }

  public addNotePageToList(notePage: NotePageComponent)
  {
    const item = { headerName: notePage.headerName, lastSavedTime: notePage.lastSavedTime, text: notePage.text };
    console.log('***inside addNotePageToList', notePage);
    this.noteId = this.noteId + 1;
    return this.storage.set(this.noteId.toString(), JSON.stringify(item));
  }

  public async read(): Promise<NotePageComponent[]>{

    console.log('** inside read');
    const notes: NotePageComponent[] = [];
    return await new Promise(resolve => {
      this.storage.forEach(data => {
        console.log('***inside foreach', data);
        notes.push(JSON.parse(data));
      });
      return resolve(notes);
    });
  }

  // getAllFavorites() : Promise<any[]> {
  //   if (this.sqlMode) {
  //     return this.sql.getAll();
  //   } else {
  //     return new Promise(resolve => {
  //       let results = [];
  //       this.storage.forEach(data => {
  //         console.log('***inside foreach', data);
  //         results.push(JSON.parse(data));
  //       });
  //       return resolve(results);
  //     });
  //   }
  // }

  public removeNotePageToList(notePage: NotePageComponent)
  {
    return this.storage.remove(notePage.headerName);
  }

  public updateNotePageToList(notePage: NotePageComponent)
  {
    return this.storage.set(notePage.headerName, notePage);
  }

  public getSpecificNote(noteHeaderName: string): Promise<NotePageComponent>
  {
    return this.storage.get(noteHeaderName);
  }

}
