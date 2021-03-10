import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import axios from "axios";
declare var $: any;

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {
  dataAllArr: any = [];
  dataArr: any = [];
  filterArr: any = [];
  constructor(
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.dataStore();
  }

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
