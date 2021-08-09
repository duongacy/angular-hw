import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template:`
    <div>demo component</div>
  `,
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
