import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SqlstorageService {

  private db: SQLiteObject;

  constructor(private sqlite: SQLite, private platform: Platform) {
    this.platform.ready().then(() => {
      // this.initializeDatabase();
    });
   }


  initializeDatabase() {
    if (this.sqlite) {
      return this.sqlite.create({ name: 'noteDate.db', location: 'default' }).then(db => {
        this.db = db;
        return this.db.
          executeSql('CREATE TABLE IF NOT EXISTS noteInfo (key noteId primary key, noteHeaderName text, noteText text, Rec_ins_time date)',
            []).then(data => {
              console.log('**after CREATE TABLE check', data);
            });
      });
    }
  }
}
