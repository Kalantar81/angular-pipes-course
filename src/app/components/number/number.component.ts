import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.less']
})
export class NumberComponent implements OnInit {
  e: number = Math.E;
  float = 0.42;

  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
