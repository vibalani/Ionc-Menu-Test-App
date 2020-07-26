import { Injectable } from '@angular/core';
import { NotePageComponent } from './note-page/note-page.page';
import { SqlstorageService } from './sqlstorage.service';

const win: any = window;
@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private sqlMode = false;
  private notePageComponentList: NotePageComponent[] = [];

  constructor(private sqlStorage: SqlstorageService)
  {
    // need to check on this
    this.sqlMode = true;
    if (win.sqlitePlugin) {
      this.sqlMode = true;
    } else {
      console.warn('SQLite plugin not installed. Falling back to regular Ionic Storage.');
    }
  }

  // public addNotePageToList(notePage: NotePageComponent)
  // {
  //   this.notePageComponentList.push(notePage);
  // }

  // public removeNotePageToList(notePage: NotePageComponent)
  // {
  //   this.notePageComponentList = this.notePageComponentList.filter(item => item !== notePage);
  // }

  // public getAllNotes(): NotePageComponent[]
  // {
  //   return this.notePageComponentList;
  // }

  // public getSpecificNote(headerName: string): NotePageComponent
  // {
  //   const note = this.notePageComponentList.find(x => x.headerName === headerName);
  //   return note;
  // }

  // public updateNotePageToList(notePage: NotePageComponent)
  // {

  //   const index = this.notePageComponentList.findIndex(x => x.headerName === notePage.headerName);
  //   if (index !== undefined) {
  //     this.notePageComponentList[index] = notePage;
  //   }

  //   // const newList = [];
  //   // this.notePageComponentList.forEach(element => {
  //   //   if (element.headerName.toLocaleLowerCase() === notePage.headerName.toLocaleLowerCase()) {
  //   //     newList.push(notePage);
  //   //   }
  //   //   else
  //   //   {
  //   //     newList.push(element);
  //   //   }
  //   // });

  //   // this.notePageComponentList = newList;
  // }

  // initStorage(): Promise<any> {
  //   if (this.sqlMode) {
  //     return this.sqlStorage.initializeDatabase();
  //   } else {
  //     return new Promise(resolve => resolve());
  //   }
  // }

}
