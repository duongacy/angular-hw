import { NgModule } from '@angular/core';
import { BaiTapLayoutComponent } from './bai-tap-layout.component';
import { LayoutContentComponent } from './layout-content/layout-content.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutSidenavComponent } from './layout-sidenav/layout-sidenav.component';

@NgModule({
  imports: [],
  exports: [BaiTapLayoutComponent],
  declarations: [
    LayoutContentComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutSidenavComponent,
    BaiTapLayoutComponent
  ],
  providers: [],
})
export class BaiTapLayoutModule {}
