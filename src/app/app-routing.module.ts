import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HomeLayoutComponent} from './layout/home/home-layout/home-layout.component';
import {SanPhamComponent} from './san-pham/san-pham/san-pham.component';
import {DanhMucSanPhamComponent} from './danh-muc-san-pham/danh-muc-san-pham/danh-muc-san-pham.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
