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

  getResult() {
    let height = this.height_selected
    let education = this.education_selected
    if(height == 0 || education == 0) {
      return "Please select your height and education level."
    }

    if (height == 1) {
      this.iq -= 50
    }else if (height == 2) {
      this.iq -= 20
    }else if (height == 3) {
      this.iq -= 10
    }

    if (education == 1) {
      this.iq -= 50
    } else if (education == 2) {
      this.iq -= 20
    } else if (education == 3) {
      this.iq -= 10
    } else if (education == 4) {
      this.iq -= 5
    } else if (education == 5) {
      this.iq -= 0
    }


    if (this.iq < 100) {
      return "idiot"
    } else if (this.iq < 120) {
      return "below average"
    } else if (this.iq < 140) {
      return "average"
    } else {
      return "above average"
    }
  }
}
