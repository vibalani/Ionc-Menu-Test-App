import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotePagePageRoutingModule } from './note-page-routing.module';

import { NotePageComponent } from './note-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotePagePageRoutingModule
  ],
  declarations: [NotePageComponent]
})
export class NotePagePageModule {}
