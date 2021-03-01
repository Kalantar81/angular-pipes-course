import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.less']
})
export class DateComponent implements OnInit {

  date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
