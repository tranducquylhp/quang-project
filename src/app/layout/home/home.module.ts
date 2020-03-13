import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeLayoutComponent} from './home-layout/home-layout.component';
import {LichSuPhatTrienComponent} from './lich-su-phat-trien/lich-su-phat-trien.component';
import {CoCauToChucComponent} from './co-cau-to-chuc/co-cau-to-chuc.component';
import {HoSoPhapLyComponent} from './ho-so-phap-ly/ho-so-phap-ly.component';
import {NangLucSanXuatComponent} from './nang-luc-san-xuat/nang-luc-san-xuat.component';
import {ChungChiChatLuongComponent} from './chung-chi-chat-luong/chung-chi-chat-luong.component';


@NgModule({
  declarations: [HomeLayoutComponent, LichSuPhatTrienComponent, CoCauToChucComponent,
    HoSoPhapLyComponent, NangLucSanXuatComponent, ChungChiChatLuongComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [HomeLayoutComponent]
})
export class HomeModule {
}
