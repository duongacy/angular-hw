import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-demo',
  template: `
    <div class="container">
      <form>
        <div class="form-group">
          <label>Email address</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter email"
            [(ngModel)]="email"
            [ngModelOptions]="{ standalone: true }"
          />
        </div>
        <div class="form-group">
          <label>Full name</label>
          <input
            type="text"
            class="form-control"
            
            placeholder="full name"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>

    <h5>{{ email }}</h5>
    <h5 >{{ fullName }}</h5>
  `,
})
export class FormDemoComponent implements OnInit {
  email: string = 'aa';
  fullName: string = 'zzz';
//   changeFullname = (value: string) => {
//     this.fullName = value;
//     console.log(this.fullName);
//   };

  constructor() {}

  ngOnInit() {}
}
