import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
declare var $: any;

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

  title = 'refinitiv-test-app';


  value_col1: any;
  value_col2 = 'isPrime';
  answer: any;

  constructor(
    private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit() {

  }

  onKeyNumberInput(event: any) {
    let values = parseFloat(event.target.value);
    console.log("values==>", values);
    if (values >= 0) {
      this.value_col1 = Math.round(values);
      this.changeTypeCheck(this.value_col2);
      console.log("this.value_col1_if==>", this.value_col1);
    } else {
      this.value_col1 = 1;
      this.changeTypeCheck(this.value_col2);
      console.log("this.value_col1_else==>", this.value_col1);
    }
  }

  onChangeCheck(event: any) {
    this.value_col2 = event.target.value;
    this.changeTypeCheck(this.value_col2)
  }

  changeTypeCheck(event: any) {
    this.value_col2 = event;
    console.log("this.value_col2==>", this.value_col2);
    if (this.value_col2 == 'isPrime') {
      this.CheckPrimeNumber();
    } else {
      this.CheckFibonacciNumber();
    }
  }

  CheckPrimeNumber() {
    const number = this.value_col1;
    let isPrime = true;

    // check if number is equal to 1
    if (number === 1) {
      // console.log("1 is neither prime nor composite number.");
      this.answer = false;
      return false
    }

    // check if number is greater than 1
    else if (number > 1) {

      // looping through 2 to number-1
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        // console.log(`${number} is a prime number`);
        this.answer = true;
        return true
      } else {
        // console.log(`${number} is a not prime number`);
        this.answer = false;
        return false
      }
    }

    // check if number is less than 1
    else {
      // console.log("The number is not a prime number.");
      return false
    }
  }

  isSquare(n: number) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  }


  CheckFibonacciNumber() {
    let num = this.value_col1;

    if (this.isSquare(5 * (num * num) - 4) || this.isSquare(5 * (num * num) + 4)) {
      this.answer = true;
      return true;
    } else { this.answer = false; return false; }
  }

}