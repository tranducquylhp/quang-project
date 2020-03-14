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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
