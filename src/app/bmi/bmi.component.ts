import {Component} from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {

  height: number = 0;
  weight: number = 0;

  constructor() {
  }

  bmi() {
    return this.weight / this.height ** 2
  }

  suggestion() {

    let bmi = this.bmi()
    if (bmi < 18.5) {
      return "underweight"
    } else if (bmi <= 24.9) {
      return "normal"
    } else if (bmi <= 29.9) {
      return "obese"
    } else {
      return "extremely obese"
    }
  }
}
