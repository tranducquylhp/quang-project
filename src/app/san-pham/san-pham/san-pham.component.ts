import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-san-pham',
  templateUrl: './san-pham.component.html',
  styleUrls: ['./san-pham.component.scss']
})
export class SanPhamComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  tieuChuanQuocGiaOngBeTongCotThepThoatNuoc() {
    this.router.navigate(['tieu-chuan-quoc-gia-ong-be-tong-cot-thep-thoat-nuoc'])
  }

  thiCongCongHopDucSan() {
    this.router.navigate(['thi-cong-cong-hop-duc-san']);
  }

  tuoiThoCuaBeTongCotThep() {
    this.router.navigate(['tuoi-tho-cua-be-tong-cot-thep']);
  }

  beTongCotThepLaGi() {
    this.router.navigate(['be-tong-cot-thep-la-gi']);
  }

  congTronCongHopQuangNinh() {
    this.router.navigate(['cong-tron-cong-hop-quang-ninh']);
  }

  congHopDoiDucSan() {
    this.router.navigate(['cong-hop-doi-duc-san']);
  }

  congHopBeTongDucSanH2000x2000() {
    this.router.navigate(['cong-hop-be-tong-duc-san-H2000x2000']);
  }

  congHopBeTongDucSanH2000x2500() {
    this.router.navigate(['cong-hop-be-tong-duc-san-H2000x2500']);
  }

  baoGiaCongHop() {
    this.router.navigate(['bao-gia-cong-hop']);
  }

  haoKyThuatDucSan() {
    this.router.navigate(['hao-ky-thuat-duc-san']);
  }
}
