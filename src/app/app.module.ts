import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashSideComponent } from './dashboard/dash-side/dash-side.component';
import { DashTitleComponent } from './dashboard/dash-title/dash-title.component';
import { DashMainComponent } from './dashboard/dash-main/dash-main.component';
import { DashComponent } from './dashboard/dash/dash.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EditorComponent} from './editor/editor.component';
import { routing } from './app.routing';
import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { EditorToolbarComponent } from './editor-toolbar/editor-toolbar.component';



@NgModule({
  declarations: [
    AppComponent,
    DashSideComponent,
    DashTitleComponent,
    DashMainComponent,
    DashComponent,
    LandingPageComponent,
    EditorComponent,
    EditorToolbarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
