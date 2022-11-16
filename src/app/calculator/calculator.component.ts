import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent  {

  firstNumber: number = 0;
  secondNumber: number = 0;

  constructor() { }

  addResult(){
  this.firstNumber = Number(this.firstNumber);
  this.secondNumber = Number(this.secondNumber);
    return this.firstNumber+ this.secondNumber;
  }

  multiplyResult(){
    return this.firstNumber * this.secondNumber;
  }

  subtractResult(){
    return this.firstNumber - this.secondNumber;
  }

  divideResult(){
    return this.firstNumber / this.secondNumber;
  }

}
