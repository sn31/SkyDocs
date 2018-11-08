import { Component, OnInit } from '@angular/core';
import {EditorComponent} from '../editor/editor.component';

@Component({
  selector: 'app-editor-toolbar',
  templateUrl: './editor-toolbar.component.html',
  styleUrls: ['./editor-toolbar.component.css']
})
export class EditorToolbarComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  boldText(){
    let selObj = window.getSelection(); 
  }
  italicizeText(){
  }
  underlineText(){
  }
  indentL(){
  }
  indentR(){
  }
  alignL(){
  }
  alignR(){
  }
  alignC(){
  }
  alignJ(){
  }
}
