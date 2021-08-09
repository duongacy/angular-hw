import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './components/data-binding.component';
import { FormDemoComponent } from './components/form-demo.component';

@NgModule({
  declarations: [DataBindingComponent, FormDemoComponent],
  imports: [FormsModule],
  exports: [DataBindingComponent]
})
export class DataBindingModule {}
