import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaiTapLayoutModule } from './bai-tap-layout/baitap-layout.module';
import { DataBindingModule } from './data-binding-module/data-binding.module';
import { StructureDirectiveModule } from './structure-directive-module/structute-directive.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BaiTapLayoutModule,
    DataBindingModule,
    StructureDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
