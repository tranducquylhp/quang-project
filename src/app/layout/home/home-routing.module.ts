import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LichSuPhatTrienComponent} from './lich-su-phat-trien/lich-su-phat-trien.component';
import {CoCauToChucComponent} from './co-cau-to-chuc/co-cau-to-chuc.component';
import {HoSoPhapLyComponent} from './ho-so-phap-ly/ho-so-phap-ly.component';
import {NangLucSanXuatComponent} from './nang-luc-san-xuat/nang-luc-san-xuat.component';
import {ChungChiChatLuongComponent} from './chung-chi-chat-luong/chung-chi-chat-luong.component';


const routes: Routes = [
  {
    path: 'lich-su-phat-trien',
    component: LichSuPhatTrienComponent
  },
  {
    path: 'co-cau-to-chuc',
    component: CoCauToChucComponent
  },
  {
    path: 'ho-so-phap-ly',
    component: HoSoPhapLyComponent
  },
  {
    path: 'nang-luc-san-xuat',
    component: NangLucSanXuatComponent
  },
  {
    path: 'chung-chi-chat-luong',
    component: ChungChiChatLuongComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
