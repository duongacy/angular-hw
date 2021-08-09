import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaiTapLoginComponent } from './components/bai-tap-login.component';
import { BaiTapQLSPComponent } from './components/bai-tap-qlsp.component';

import { StructureDirectiveComponent } from './components/structure-directive.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [StructureDirectiveComponent, BaiTapQLSPComponent,BaiTapLoginComponent ],
    exports: [StructureDirectiveComponent],
    providers: [],
})
export class StructureDirectiveModule { }
