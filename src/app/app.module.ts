import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaiTapLayoutComponent } from './bai-tap-layout/bai-tap-layout.component';
import { BaiTapLayoutModule } from './bai-tap-layout/baitap-layout.module';
import { LayoutContentComponent } from './bai-tap-layout/layout-content/layout-content.component';
import { LayoutFooterComponent } from './bai-tap-layout/layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from './bai-tap-layout/layout-header/layout-header.component';
import { LayoutSidenavComponent } from './bai-tap-layout/layout-sidenav/layout-sidenav.component';
import { DataBindingModule } from './DataBinding/DataBinding.module';
import { DemoComponent } from './demo/demo.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BaiTapLayoutModule,
    DataBindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
