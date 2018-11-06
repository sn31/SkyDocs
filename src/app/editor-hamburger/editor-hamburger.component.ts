import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-editor-hamburger',
  templateUrl: './editor-hamburger.component.html',
  styleUrls: ['./editor-hamburger.component.css']
})
export class EditorHamburgerComponent implements OnInit {
  @Output() clickSender = new EventEmitter();
  
  constructor() { }

  xClicked(): void {
    this.clickSender.emit();
  }

  ngOnInit() {
  }

}
