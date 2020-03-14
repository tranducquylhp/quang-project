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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
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
