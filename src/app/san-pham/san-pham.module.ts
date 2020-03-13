import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanPhamRoutingModule } from './san-pham-routing.module';
import { SanPhamComponent } from './san-pham/san-pham.component';
import { BaoGiaCongTronComponent } from './bao-gia-cong-tron/bao-gia-cong-tron.component';
import { BaoGiaCongHopComponent } from './bao-gia-cong-hop/bao-gia-cong-hop.component';
import { BaoGiaHaoKyThuatComponent } from './bao-gia-hao-ky-thuat/bao-gia-hao-ky-thuat.component';
import { BaoGiaHoGaComponent } from './bao-gia-ho-ga/bao-gia-ho-ga.component';


@NgModule({
  declarations: [SanPhamComponent, BaoGiaCongTronComponent, BaoGiaCongHopComponent, BaoGiaHaoKyThuatComponent, BaoGiaHoGaComponent],
  imports: [
    CommonModule,
    SanPhamRoutingModule
  ],
  exports: [SanPhamComponent]
})
export class SanPhamModule { }
