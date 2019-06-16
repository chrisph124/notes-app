import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NotesHeaderComponent } from './components/notes-header/notes-header.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { NoteListComponent } from './components/notes-container/note-list/note-list.component';
import { NoteEditorComponent } from './components/notes-container/note-editor/note-editor.component';
import { NoteComponent } from './components/notes-container/note-list/note/note.component';
import { CreateNewNoteComponent } from './components/notes-container/note-list/create-new-note/create-new-note.component';

import {MatGridListModule, MatIconModule, MatListModule} from "@angular/material";
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NotesHeaderComponent,
    NotesContainerComponent,
    NoteListComponent,
    NoteEditorComponent,
    NoteComponent,
    CreateNewNoteComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
