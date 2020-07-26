import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.page.html',
  styleUrls: ['./note-page.page.scss'],
})
export class NotePageComponent implements OnInit {

  public headerName = '';
  public text = '';
  public lastSavedTime = new Date();
  private editMode = false;
  noteList = [];

  constructor(private localStorage: LocalStorageService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('notepage ngOnInit');
    if (this.activatedRoute.snapshot.paramMap.get('name')) {
      console.log('NotePageComponent: ', this.activatedRoute.snapshot.paramMap.get('name'));
      const noteHeaderName = this.activatedRoute.snapshot.paramMap.get('name');

      if (noteHeaderName) {
        const note = this.localStorage.getSpecificNote(noteHeaderName).then(data => data = note);
        this.headerName = note.headerName;
        this.text = note.text;
        this.editMode = true;
      }
    }
  }

  okClick() {
    console.log('okClick');
    if (!this.editMode) {
      console.log('okClick non-editMode');
      this.localStorage.addNotePageToList(this);
      // this.localStorage.read().then(data => {
      //   this.noteList = data;
      //   console.log('okClick 2: ' + this.noteList);
      //   this.router.navigate(['']);
      // });
      this.router.navigate(['']);
    }
    else {
      console.log('okClick editMode');
      this.localStorage.updateNotePageToList(this);
      this.editMode = false;
      this.router.navigate(['']);
    }
  }
}
