import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { EditorToolbarComponent } from './editor-toolbar/editor-toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    EditorToolbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
