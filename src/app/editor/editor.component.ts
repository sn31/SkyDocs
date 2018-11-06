import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  docTitle: String = null;
  docContent: String = null;
  constructor() {
   }

  ngOnInit() {
  }

}


