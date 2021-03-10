import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import axios from "axios";
// import * as WebRequest from 'web-request';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  title = 'refinitiv-test-app';


  value_col1: any;
  value_col2 = 'isPrime';
  answer: any;
  dataAllArr: any = [];
  dataArr: any = [];
  filterArr: any = [];

  constructor(
    private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit() {

    this.spinner.show();
    setTimeout(async () => {

      this.dataStore();
      // this.dataStore2();
      this.spinner.hide();
    }, 1);
  }

  // onKeyNumberInput(event: any) {
  //   let values = parseFloat(event.target.value);
  //   console.log("values==>", values);

  //   if (values >= 0) {
  //     this.value_col1 = Math.round(values);
  //     this.changeTypeCheck(this.value_col2);
  //     console.log("this.value_col1_if==>", this.value_col1);
  //   } else {
  //     this.value_col1 = 1;
  //     this.changeTypeCheck(this.value_col2);
  //     console.log("this.value_col1_else==>", this.value_col1);
  //   }
  // }

  // onChangeCheck(event: any) {
  //   this.value_col2 = event.target.value;
  //   this.changeTypeCheck(this.value_col2)
  // }

  // changeTypeCheck(event: any) {
  //   this.value_col2 = event;
  //   console.log("this.value_col2==>", this.value_col2);
  //   if (this.value_col2 == 'isPrime') {
  //     this.CheckPrimeNumber();
  //   } else {
  //     this.CheckFibonacciNumber();
  //   }
  // }

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


  /////2/////
  dataStore() {

    var that = this;
    this.spinner.show();
    setTimeout(async () => {

      axios.get('https://api.publicapis.org/categories')
        .then(function (response) {
          that.dataArr = response.data
          that.dataAllArr = response.data
        });

      this.spinner.hide();
    }, 10);

  }

  filterData(event: any) {
    let search = event.target.value;
    console.log("search==>", search);
    this.dataArr = this.dataAllArr;
    if (search == '') {
      console.log("if==>");
      this.dataArr = this.dataAllArr;
    } else {
      function filterItems(arr: any, query: any) {
        return arr.filter(function (el: any) {
          return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
        })
      }
      this.filterArr = filterItems(this.dataArr, search)
      this.dataArr = this.filterArr;
      console.log(this.filterArr);
    }
  }

}