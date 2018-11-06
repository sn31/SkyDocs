import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dash-main',
  templateUrl: './dash-main.component.html',
  styleUrls: ['./dash-main.component.css']
})
export class DashMainComponent {
  docs: string[] = ["one", "two", "three"];
  @Output() loadocsVideoSender = new EventEmitter();
  constructor() { }


}
