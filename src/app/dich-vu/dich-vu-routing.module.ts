import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DichVuVanChuyenComponent} from './dich-vu-van-chuyen/dich-vu-van-chuyen.component';
import {DichVuThiNghiemComponent} from './dich-vu-thi-nghiem/dich-vu-thi-nghiem.component';


const routes: Routes = [
  {
    path: 'dich-vu-van-chuyen',
    component: DichVuVanChuyenComponent
  },
  {
    path: 'dich-vu-thi-nghiem',
    component: DichVuThiNghiemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DichVuRoutingModule { }
