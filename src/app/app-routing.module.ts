import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HomeLayoutComponent} from './layout/home/home-layout/home-layout.component';
import {SanPhamComponent} from './san-pham/san-pham/san-pham.component';
import {DanhMucSanPhamComponent} from './danh-muc-san-pham/danh-muc-san-pham/danh-muc-san-pham.component';
import {NhaMayComponent} from './nha-may/nha-may.component';
import {NhaMaySanXuatCongKichNgamNittaSongDayComponent} from './nha-may-san-xuat-cong-kich-ngam-nitta-song-day/nha-may-san-xuat-cong-kich-ngam-nitta-song-day.component';
import {NhaMaySanXuatVlxdSongDay1Component} from './nha-may-san-xuat-vlxd-song-day1/nha-may-san-xuat-vlxd-song-day1.component';
import {NhaMaySanXuatVlxdSongDay2Component} from './nha-may-san-xuat-vlxd-song-day2/nha-may-san-xuat-vlxd-song-day2.component';
import {PhongThiNghiemLasXd1432Component} from './phong-thi-nghiem-las-xd1432/phong-thi-nghiem-las-xd1432.component';
import {TinTucComponent} from './tin-tuc/tin-tuc.component';
import {TieuChuanQuocGiaOngCongBeTongCotThepThoatNuocComponent} from './tieu-chuan-quoc-gia-ong-cong-be-tong-cot-thep-thoat-nuoc/tieu-chuan-quoc-gia-ong-cong-be-tong-cot-thep-thoat-nuoc.component';
import {ThiCongCongHopDucSanComponent} from './thi-cong-cong-hop-duc-san/thi-cong-cong-hop-duc-san.component';
import {TuoiThoCuaBeTongCotThepComponent} from './tuoi-tho-cua-be-tong-cot-thep/tuoi-tho-cua-be-tong-cot-thep.component';
import {BeTongCotThepLaGiComponent} from './be-tong-cot-thep-la-gi/be-tong-cot-thep-la-gi.component';
import {CongTronCongHopQuangNinhComponent} from './cong-tron-cong-hop-quang-ninh/cong-tron-cong-hop-quang-ninh.component';
import {BanVeThietKeOngCongComponent} from './ban-ve-thiet-ke-ong-cong/ban-ve-thiet-ke-ong-cong.component';
import {HuongDanThiCongCongTronDucSanComponent} from './huong-dan-thi-cong-cong-tron-duc-san/huong-dan-thi-cong-cong-tron-duc-san.component';
import {YeuCauVeHinhThucBenNgoaiCuaCongHopDucSanComponent} from './yeu-cau-ve-hinh-thuc-ben-ngoai-cua-cong-hop-duc-san/yeu-cau-ve-hinh-thuc-ben-ngoai-cua-cong-hop-duc-san.component';
import {CongBeTongDucSanComponent} from './cong-be-tong-duc-san/cong-be-tong-duc-san.component';
import {HoiThiNauAnCongBeTongComponent} from './hoi-thi-nau-an-cong-be-tong/hoi-thi-nau-an-cong-be-tong.component';
import {DichVuComponent} from './dich-vu/dich-vu/dich-vu.component';
import {LienHeComponent} from './lien-he/lien-he.component';
import {BanVeThietKeCongHopDucSanComponent} from './ban-ve-thiet-ke-cong-hop-duc-san/ban-ve-thiet-ke-cong-hop-duc-san.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [{ path: '', loadChildren: () => import('./layout/home/home.module').then(m => m.HomeModule) }],
  },
  {
    path: '',
    component: SanPhamComponent,
    children: [{ path: '', loadChildren: () => import('./san-pham/san-pham.module').then(m => m.SanPhamModule) }],
  },
  {
    path: '',
    component: DanhMucSanPhamComponent,
    children: [{ path: '', loadChildren: () => import('./danh-muc-san-pham/danh-muc-san-pham.module').then(m => m.DanhMucSanPhamModule) }],
  },
  {
    path: '',
    component: DichVuComponent,
    children: [{ path: '', loadChildren: () => import('./dich-vu/dich-vu.module').then(m => m.DichVuModule) }],
  },
  {
    path: 'nha-may-san-xuat-cong-kich-ngam-nitta-song-day',
    component: NhaMaySanXuatCongKichNgamNittaSongDayComponent
  },
  {
    path: 'nha-may-san-xuat-vlxd-song-day-1',
    component: NhaMaySanXuatVlxdSongDay1Component
  },
  {
    path: 'nha-may-san-xuat-vlxd-song-day-2',
    component: NhaMaySanXuatVlxdSongDay2Component
  },
  {
    path: 'phong-thi-nghiem-las-xd-1432',
    component: PhongThiNghiemLasXd1432Component
  },
  {
    path: 'nha-may',
    component: NhaMayComponent
  },
  {
    path: 'tin-tuc',
    component: TinTucComponent
  },
  {
    path: 'tieu-chuan-quoc-gia-ong-be-tong-cot-thep-thoat-nuoc',
    component: TieuChuanQuocGiaOngCongBeTongCotThepThoatNuocComponent
  },
  {
    path: 'thi-cong-cong-hop-duc-san',
    component: ThiCongCongHopDucSanComponent
  },
  {
    path: 'tuoi-tho-cua-be-tong-cot-thep',
    component: TuoiThoCuaBeTongCotThepComponent
  },
  {
    path: 'be-tong-cot-thep-la-gi',
    component: BeTongCotThepLaGiComponent
  },
  {
    path: 'cong-tron-cong-hop-quang-ninh',
    component: CongTronCongHopQuangNinhComponent
  },
  {
    path: 'ban-ve-thiet-ke-ong-cong',
    component: BanVeThietKeOngCongComponent
  },
  {
    path: 'huong-dan-thi-cong-cong-tron-duc-san',
    component: HuongDanThiCongCongTronDucSanComponent
  },
  {
    path: 'yeu-cau-ve-hinh-thuc-ben-ngoai-cua-cong-hop-duc-san',
    component: YeuCauVeHinhThucBenNgoaiCuaCongHopDucSanComponent
  },
  {
    path: 'tieu-chuan-vat-lieu-san-xuat-cong-hop-duc-san',
    component: TieuChuanQuocGiaOngCongBeTongCotThepThoatNuocComponent
  },
  {
    path: 'ban-ve-thiet-ke-cong-hop-duc-san',
    component: BanVeThietKeCongHopDucSanComponent
  },
  {
    path: 'cong-be-tong-duc-san',
    component: CongBeTongDucSanComponent
  },
  {
    path: 'hoi-thi-nau-an-cong-be-tong',
    component: HoiThiNauAnCongBeTongComponent
  },
  {
    path: 'lien-he',
    component: LienHeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
