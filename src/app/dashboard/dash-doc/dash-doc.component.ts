
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dash-doc',
  templateUrl: './dash-doc.component.html',
  styleUrls: ['./dash-doc.component.css']
})

export class DashDocComponent {
  @Input() displayDoc: string;

  constructor() { }



}
