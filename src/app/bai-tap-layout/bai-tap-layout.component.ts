import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bai-tap-layout',
  template: `
    <div>
      <layout-header></layout-header>
      <div class="container">
        <div class="row">
          <div class="col-4">
            <layout-sidenav></layout-sidenav>
          </div>
          <div class="col-8">
            <layout-content></layout-content>
          </div>
        </div>
      </div>

      <layout-footer></layout-footer>
    </div>
  `,
})
export class BaiTapLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
