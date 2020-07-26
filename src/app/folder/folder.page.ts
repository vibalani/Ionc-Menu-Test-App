import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotePageComponent } from '../note-page/note-page.page';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements  OnInit {
  public folder: string;
  public noteList: NotePageComponent[];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private localStorage: LocalStorageService)
  {
  }

  async ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('folderpage ngOnInit');

    await this.localStorage.read().then(data => {
      this.noteList = data;
      console.log('folderpage ngOnInit 2: ' + this.noteList);
    });
  }

  addButtonClick()
  {
    console.log('addButtonClick() clicked');
    this.router.navigate(['/note-page']);
  }

  searchButtonClick()
  {
    console.log('searchButtonClick() clicked');
  }

  popOverClick()
  {
    console.log('popOverClick() clicked');
  }

  onEditPageClick(note)
  {
    this.router.navigate(['/note-page', { name: note.headerName }]);
  }
}
