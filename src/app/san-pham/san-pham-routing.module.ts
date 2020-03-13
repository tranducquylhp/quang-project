import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BaoGiaCongTronComponent} from './bao-gia-cong-tron/bao-gia-cong-tron.component';
import {BaoGiaCongHopComponent} from './bao-gia-cong-hop/bao-gia-cong-hop.component';
import {BaoGiaHaoKyThuatComponent} from './bao-gia-hao-ky-thuat/bao-gia-hao-ky-thuat.component';
import {BaoGiaHoGaComponent} from './bao-gia-ho-ga/bao-gia-ho-ga.component';


const routes: Routes = [
  {
    path: 'bao-gia-cong-tron',
    component: BaoGiaCongTronComponent
  },
  {
    path: 'bao-gia-cong-hop',
    component: BaoGiaCongHopComponent
  },
  {
    path: 'bao-gia-hao-ky-thuat',
    component: BaoGiaHaoKyThuatComponent
  },
  {
    path: 'bao-gia-ho-ga',
    component: BaoGiaHoGaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanPhamRoutingModule { }
