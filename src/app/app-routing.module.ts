import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FolderPage } from './folder/folder.page';
import { NotePageComponent } from './note-page/note-page.page';
import { componentFactoryName } from '@angular/compiler';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
    // component: FolderPage
  },
  {
    path: 'note-page',
    loadChildren: () => import('./note-page/note-page.module').then( m => m.NotePagePageModule)
    // component: NotePageComponent
  },
  {
    path: 'note-page/:name',
    loadChildren: () => import('./note-page/note-page.module').then(m => m.NotePagePageModule)
    // component: NotePageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
