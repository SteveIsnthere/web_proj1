import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idiot-check',
  templateUrl: './idiot-check.component.html',
  styleUrls: ['./idiot-check.component.css']
})
export class IdiotCheckComponent {
  iq=200
  height_selected = 0
  education_selected = 0;
  constructor() { }
}
