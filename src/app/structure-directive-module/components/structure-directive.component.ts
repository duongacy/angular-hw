import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'structure-directive',
  template: `
    <h2>Demo directive</h2>
    <div *ngIf="status">Hien thi</div>
    <button (click)="toggleDiv()">click me</button>

    <input type="text" #number />
    <button (click)="changeNumber(number.value)">Ok</button>
    <h3>{{ num }}</h3>
    <div *ngIf="num % 2 === 0">So chan</div>
    <div *ngIf="num % 2 !== 0">So le</div>

    <h3>Dang nhap dang xuat</h3>

    <div *ngIf="isLogin === true; else dangXuatDiv">
      <button (click)="dangXuat()">Dang xuat</button>
    </div>

    <ng-template #dangXuatDiv>
      <button (click)="dangNhap()">Dang nhap</button>
    </ng-template>

    <h3>Switch case</h3>
    <div [ngSwitch]="color">
      <div
        class="py-1"
        *ngSwitchCase="'red'"
        style="background-color: red;"
      ></div>
      <div
        class="py-1"
        *ngSwitchCase="'green'"
        style="background-color: green;"
      ></div>
    </div>

    <select [(ngModel)]="color">
      <option value="red">red</option>
      <option value="green">green</option>
    </select>

    <h3>ng for</h3>

    <div *ngFor="let p of arrProduct" class="border">
      <p>Id: {{ p.id }}</p>
      <p>Name: {{ p.name }}</p>
    </div>

    <h3>ng for table</h3>

    <table class="table">
      <tr>
        <td>id</td>
        <td>name</td>
      </tr>

      <tr
        class=""
        *ngFor="let p of arrProduct"
        [ngClass]="{
          'bg-dark text-white': p.id % 2 === 0
        }"
      >
        <td>{{ p.id }}</td>
        <td>{{ p.name }}</td>
      </tr>
    </table>


    <bai-tap-login></bai-tap-login>

    <bai-tap-qlsp></bai-tap-qlsp>
  `,
})
export class StructureDirectiveComponent implements OnInit {
  status: boolean = false;
  num: number = 2;
  isLogin: boolean = false;

  color: string = 'green';

  arrProduct: any = [
    {
      id: 1,
      name: 'product 1',
    },
    {
      id: 2,
      name: 'product 2',
    },
    {
      id: 3,
      name: 'product 3',
    },
    {
      id: 4,
      name: 'product 4',
    },
    {
      id: 5,
      name: 'product 5',
    },
  ];

  toggleDiv = () => {
    this.status = !this.status;
  };

  changeNumber = (value: string) => {
    this.num = Number(value);
  };

  dangNhap() {
    this.isLogin = true;
  }
  dangXuat() {
    this.isLogin = false;
  }
  constructor() {}

  ngOnInit() {}
}
