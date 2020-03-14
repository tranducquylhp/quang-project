import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DichVuRoutingModule } from './dich-vu-routing.module';
import { DichVuComponent } from './dich-vu/dich-vu.component';
import { DichVuThiNghiemComponent } from './dich-vu-thi-nghiem/dich-vu-thi-nghiem.component';
import { DichVuVanChuyenComponent } from './dich-vu-van-chuyen/dich-vu-van-chuyen.component';


@NgModule({
  declarations: [DichVuComponent, DichVuThiNghiemComponent, DichVuVanChuyenComponent],
  imports: [
    CommonModule,
    DichVuRoutingModule
  ]
})
export class DichVuModule { }
