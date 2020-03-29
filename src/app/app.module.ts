import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import {SlideshowModule} from 'ng-simple-slideshow';

import {HomeModule} from './layout/home/home.module';
import {SanPhamModule} from './san-pham/san-pham.module';
import {DanhMucSanPhamModule} from './danh-muc-san-pham/danh-muc-san-pham.module';
import { NhaMayComponent } from './nha-may/nha-may.component';
import { PhongThiNghiemLasXd1432Component } from './phong-thi-nghiem-las-xd1432/phong-thi-nghiem-las-xd1432.component';
import { NhaMaySanXuatCongKichNgamNittaSongDayComponent } from './nha-may-san-xuat-cong-kich-ngam-nitta-song-day/nha-may-san-xuat-cong-kich-ngam-nitta-song-day.component';
import { NhaMaySanXuatVlxdSongDay2Component } from './nha-may-san-xuat-vlxd-song-day2/nha-may-san-xuat-vlxd-song-day2.component';
import { NhaMaySanXuatVlxdSongDay1Component } from './nha-may-san-xuat-vlxd-song-day1/nha-may-san-xuat-vlxd-song-day1.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { TieuChuanQuocGiaOngCongBeTongCotThepThoatNuocComponent } from './tieu-chuan-quoc-gia-ong-cong-be-tong-cot-thep-thoat-nuoc/tieu-chuan-quoc-gia-ong-cong-be-tong-cot-thep-thoat-nuoc.component';
import { ThiCongCongHopDucSanComponent } from './thi-cong-cong-hop-duc-san/thi-cong-cong-hop-duc-san.component';
import { TuoiThoCuaBeTongCotThepComponent } from './tuoi-tho-cua-be-tong-cot-thep/tuoi-tho-cua-be-tong-cot-thep.component';
import { BeTongCotThepLaGiComponent } from './be-tong-cot-thep-la-gi/be-tong-cot-thep-la-gi.component';
import { CongTronCongHopQuangNinhComponent } from './cong-tron-cong-hop-quang-ninh/cong-tron-cong-hop-quang-ninh.component';
import { BanVeThietKeOngCongComponent } from './ban-ve-thiet-ke-ong-cong/ban-ve-thiet-ke-ong-cong.component';
import { HuongDanThiCongCongTronDucSanComponent } from './huong-dan-thi-cong-cong-tron-duc-san/huong-dan-thi-cong-cong-tron-duc-san.component';
import { YeuCauVeHinhThucBenNgoaiCuaCongHopDucSanComponent } from './yeu-cau-ve-hinh-thuc-ben-ngoai-cua-cong-hop-duc-san/yeu-cau-ve-hinh-thuc-ben-ngoai-cua-cong-hop-duc-san.component';
import { TieuChuanVatLieuSanXuatCongHopDucSanComponent } from './tieu-chuan-vat-lieu-san-xuat-cong-hop-duc-san/tieu-chuan-vat-lieu-san-xuat-cong-hop-duc-san.component';
import { BanVeThietKeCongHopDucSanComponent } from './ban-ve-thiet-ke-cong-hop-duc-san/ban-ve-thiet-ke-cong-hop-duc-san.component';
import { CongBeTongDucSanComponent } from './cong-be-tong-duc-san/cong-be-tong-duc-san.component';
import { HoiThiNauAnCongBeTongComponent } from './hoi-thi-nau-an-cong-be-tong/hoi-thi-nau-an-cong-be-tong.component';
import {DichVuModule} from './dich-vu/dich-vu.module';
import { LienHeComponent } from './lien-he/lien-he.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NhaMayComponent,
    PhongThiNghiemLasXd1432Component,
    NhaMaySanXuatCongKichNgamNittaSongDayComponent,
    NhaMaySanXuatVlxdSongDay2Component,
    NhaMaySanXuatVlxdSongDay1Component,
    TinTucComponent,
    TieuChuanQuocGiaOngCongBeTongCotThepThoatNuocComponent,
    ThiCongCongHopDucSanComponent,
    TuoiThoCuaBeTongCotThepComponent,
    BeTongCotThepLaGiComponent,
    CongTronCongHopQuangNinhComponent,
    BanVeThietKeOngCongComponent,
    HuongDanThiCongCongTronDucSanComponent,
    YeuCauVeHinhThucBenNgoaiCuaCongHopDucSanComponent,
    TieuChuanVatLieuSanXuatCongHopDucSanComponent,
    BanVeThietKeCongHopDucSanComponent,
    CongBeTongDucSanComponent,
    HoiThiNauAnCongBeTongComponent,
    LienHeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
    HomeModule,
    SanPhamModule,
    DanhMucSanPhamModule,
    DichVuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
