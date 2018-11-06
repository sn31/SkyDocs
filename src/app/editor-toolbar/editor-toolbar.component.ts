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
    console.log(selObj);
  }
  italicizeText(){
    console.log("Italicized");
  }
  underlineText(){
    console.log("Underlined");
  }
  indentL(){
    console.log("Indented Left");
  }
  indentR(){
    console.log("Indented Right");
  }
  alignL(){
    console.log("Aligned Left");
  }
  alignR(){
    console.log("Aligned Right");
  }
  alignC(){
    console.log("Aligned Center");
  }
  alignJ(){
    console.log("Aligned Justify");
  }
}
