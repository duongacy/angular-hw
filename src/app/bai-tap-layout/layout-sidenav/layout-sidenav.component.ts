import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-sidenav',
  template: ` <div class="sidenav">layout sidenav</div> `,
  styles: [
    `
      .sidenav {
        height: 500px;
        background-color: red;
      }
    `,
  ],
})
export class LayoutSidenavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
