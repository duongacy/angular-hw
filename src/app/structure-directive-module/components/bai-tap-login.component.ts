import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bai-tap-login',
  template: `
    <div>
      <h2>Bai tap login</h2>
      <form action="" *ngIf="isLogin === false; else dangXuatDiv">
        <div>
          <label for="">username</label>
          <input type="text" [(ngModel)]="userName" [ngModelOptions]="{standalone: true}"/>
        </div>
        <div>
          <label for="">password</label>
          <input type="password" [(ngModel)]="password" [ngModelOptions]="{standalone: true}"/>
        </div>
        <button (click)="dangNhap()">login</button>
      </form>
    </div>

    <ng-template #dangXuatDiv>
      <button (click)="dangXuat()">Dang xuat</button>
    </ng-template>
  `,
})
export class BaiTapLoginComponent implements OnInit {
  isLogin: boolean = false;
  userName: string = '';
  password: string = '';

  dangNhap() {
    if (this.userName === 'y' && this.password === '1') {
      this.isLogin = true;
    } else {
      alert('sai mat khau');
    }
  }
  dangXuat() {
    this.isLogin = false;
  }
  constructor() {}

  ngOnInit() {}
}
