import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DanhMucSanPhamRoutingModule } from './danh-muc-san-pham-routing.module';
import { DanhMucSanPhamComponent } from './danh-muc-san-pham/danh-muc-san-pham.component';
import { CongTronComponent } from './cong-tron/cong-tron.component';
import {CongHopDonComponent} from './cong-hop-don/cong-hop-don.component';
import { CongHopDoiComponent } from './cong-hop-doi/cong-hop-doi.component';
import { HaoKyThuatComponent } from './hao-ky-thuat/hao-ky-thuat.component';
import { HoGaDucSanComponent } from './ho-ga-duc-san/ho-ga-duc-san.component';
import { CongKichNgamComponent } from './cong-kich-ngam/cong-kich-ngam.component';
import { BeTongVomComponent } from './be-tong-vom/be-tong-vom.component';


@NgModule({
  declarations: [DanhMucSanPhamComponent, CongTronComponent, CongHopDonComponent, CongHopDoiComponent, HaoKyThuatComponent, HoGaDucSanComponent, CongKichNgamComponent, BeTongVomComponent],
  imports: [
    CommonModule,
    DanhMucSanPhamRoutingModule
  ],
  exports: [DanhMucSanPhamComponent]
})
export class DanhMucSanPhamModule { }
