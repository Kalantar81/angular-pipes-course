import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strings',
  templateUrl: './strings.component.html',
  styleUrls: ['./strings.component.less']
})
export class StringsComponent implements OnInit {

  str = 'hello word!';

  constructor() { }

  ngOnInit(): void {
  }

}
