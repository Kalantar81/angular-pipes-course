import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.less']
})
export class CustomPipesComponent implements OnInit {

  posts: IPost[] = [
    {title: 'Beer', text: 'Germany have a best beer'},
    {title: 'Bread', text: 'Russians make a best bread'},
    {title: 'Javascript', text: 'The best language in the world'}
  ];

  search = '';
  searchField = 'title';

  constructor() { }

  ngOnInit(): void {
  }

  addPost(): void {
    /** put it on zero index */
    this.posts.unshift({
      title: 'Angular 8',
      text: 'Best farmewor in thr world'
    });
  }
}

export interface IPost {
  title: string;
  text: string;
}
