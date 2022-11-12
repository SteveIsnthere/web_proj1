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

  }
}
