import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.less']
})
export class AsyncComponent implements OnInit {

  p: Promise<string> = new Promise<string>(
    resolve => {
      setTimeout(() => {
        resolve('Promise Resolved!');
      }, 2000);
    }
    );

    date: Observable<Date> = new Observable(
      obs => {
        setInterval(() => {
          obs.next(new Date());
        }, 1000);
      }
    );

    dateWithoutAsyncPipe$: Observable<Date> = new Observable(
      obs => {
        setInterval(() => {
          obs.next(new Date());
        }, 1000);
      }
    );

    dateValue: Date;

  constructor() { }

  ngOnInit(): void {
    this.dateWithoutAsyncPipe$.subscribe((date) => {
      this.dateValue = date;
    });
  }

}
