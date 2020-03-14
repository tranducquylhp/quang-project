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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
    HomeModule,
    SanPhamModule,
    DanhMucSanPhamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
