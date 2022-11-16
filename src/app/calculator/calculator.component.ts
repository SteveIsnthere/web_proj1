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
    return 0;
  }

  multiplyResult(){
    return 0;
  }

  subtractResult(){
    return 0;
  }

  divideResult(){
    return 0;
  }

}
