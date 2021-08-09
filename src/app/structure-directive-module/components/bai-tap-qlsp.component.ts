import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bai-tap-qlsp',
  template: `
    <div>
      <h1>quan ly san pham</h1>

      <table>
        <tr>
          <td>id</td>
          <td>name</td>
        </tr>
        <tr *ngFor="let p of dsSanPham">
          <td>{{ p.id }}</td>
          <td>{{ p.name }}</td>
        </tr>
      </table>

      <form action="">
        <div>
          <label for="">id</label>
          <input type="text" #id />
        </div>
        <div>
          <label for="">name</label>
          <input type="text" #name />
        </div>

        <button (click)="themSanPham()">them san pham</button>
      </form>
    </div>
  `,
})
export class BaiTapQLSPComponent implements OnInit {
  id: string = '';
  name: string = '';

  themSanPham = () => {
    this.dsSanPham.push({
        id: this.id,
        name: this.name
    })
    console.log(this.dsSanPham);
    
  };

  dsSanPham: any = [
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
  ];
  constructor() {}

  ngOnInit() {}
}
