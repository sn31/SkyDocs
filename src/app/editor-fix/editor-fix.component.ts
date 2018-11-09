import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-editor-fix",
  templateUrl: "./editor-fix.component.html",
  styleUrls: ["./editor-fix.component.css"]
})
export class EditorFixComponent implements OnInit {
  db = firebase.database;
  constructor() {}

  ngOnInit() {}
  
}
