import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotePageComponent } from './note-page.page';

describe('NotePagePage', () => {
  let component: NotePageComponent;
  let fixture: ComponentFixture<NotePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotePageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
