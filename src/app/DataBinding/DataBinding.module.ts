import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './DataBinding.component';
import { FormDemoComponent } from './form-demo.component';

@NgModule({
  declarations: [DataBindingComponent, FormDemoComponent],
  imports: [FormsModule],
  exports: [DataBindingComponent]
})
export class DataBindingModule {}
