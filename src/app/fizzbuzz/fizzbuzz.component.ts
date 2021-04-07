import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.scss']
})
export class FizzbuzzComponent implements OnInit {
  results: any = [];

  constructor() { 
    this.results[0] = "Start!";
  }

  ngOnInit() {
    this.doProcess();
  }

  doProcess() {
    const NUM = 100;
    for (let i = 1; i <= NUM; i++) {
     
      if (i % 3 === 0 && i % 5 === 0) {
        this.results.push( i+' FizzBuzz');
      } else if ((i % 3 === 0) && !(i % 5 === 0)) {
        this.results.push(i+' Fizz');
      } else if ((i % 5 === 0) && !(i % 3 === 0)) {
        this.results.push(i+' Buzz');
      } else {
        this.results.push(i);
      }
    }
  }

}
