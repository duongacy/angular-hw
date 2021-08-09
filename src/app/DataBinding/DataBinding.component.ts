import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  template: `
    <div>
      <p>{{ title}}</p>
      <!-- interpolation -->
      <!-- <input type="text" value="{{ title }}" /> -->

      <!-- <h3>property binding</h3>
      <div [innerText]></div> -->

      <h3>Event binding</h3>
      <input type="text" #title /> <br />
      <button (click)="changeTitle(title.value)">change title</button>

      <h3>two-way binding</h3>
      <!-- <input type="text" [(ngModel)]="title" /> -->

    </div>


    <h3>form demo</h3>

    <app-form-demo></app-form-demo>
  `,
})
export class DataBindingComponent implements OnInit {
  title: string = 'Hello YDT';
  changeTitle = (x: string) => {
    this.title = x;
    console.log('title da thay doi', this.title);
  };
  constructor() {}

  ngOnInit() {}
}
