import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BaoGiaCongTronComponent} from '../san-pham/bao-gia-cong-tron/bao-gia-cong-tron.component';
import {CongTronComponent} from './cong-tron/cong-tron.component';
import {CongHopDonComponent} from './cong-hop-don/cong-hop-don.component';
import {CongHopDoiComponent} from './cong-hop-doi/cong-hop-doi.component';
import {HaoKyThuatComponent} from './hao-ky-thuat/hao-ky-thuat.component';
import {HoGaDucSanComponent} from './ho-ga-duc-san/ho-ga-duc-san.component';
import {CongKichNgamComponent} from './cong-kich-ngam/cong-kich-ngam.component';
import {BeTongVomComponent} from './be-tong-vom/be-tong-vom.component';


const routes: Routes = [
  {
    path: 'cong-tron',
    component: CongTronComponent
  },
  {
    path: 'cong-hop-don',
    component: CongHopDonComponent
  },
  {
    path: 'cong-hop-doi',
    component: CongHopDoiComponent
  },
  {
    path: 'hao-ky-thuat',
    component: HaoKyThuatComponent
  },
  {
    path: 'ho-ga-duc-san',
    component: HoGaDucSanComponent
  },
  {
    path: 'cong-kich-ngam',
    component: CongKichNgamComponent
  },
  {
    path: 'be-tong-vom',
    component: BeTongVomComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanhMucSanPhamRoutingModule { }
