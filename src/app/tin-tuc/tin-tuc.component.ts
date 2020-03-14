import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.scss']
})
export class TinTucComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  tieuChuanQuocGiaOngCongBeTongCotThepThoatNuoc(){
    this.router.navigate(['tieu-chuan-quoc-gia-ong-be-tong-cot-thep-thoat-nuoc']);
  }

  thiCongCongHopDucSan(){
    this.router.navigate(['thi-cong-cong-hop-duc-san']);
  }

  tuoiThoCuaBeTongCotThep(){
    this.router.navigate(['tuoi-tho-cua-be-tong-cot-thep']);
  }

  beTongCotThepLaGi(){
    this.router.navigate(['be-tong-cot-thep-la-gi']);
  }

  congTronCongHopQuangNinh(){
    this.router.navigate(['cong-tron-cong-hop-quang-ninh']);
  }

  banVeThieuKeOngCong(){
    this.router.navigate(['ban-ve-thiet-ke-ong-cong']);
  }

  huongDanThiCongCongTronDucSan(){
    this.router.navigate(['huong-dan-thi-cong-cong-tron-duc-san']);
  }

  yeuCauVeHinhThucBenNgoaiCuaCongHopDucSan(){
    this.router.navigate(['yeu-cau-ve-hinh-thuc-ben-ngoai-cua-cong-hop-duc-san']);
  }

  tieuChuanVatLieuSanXuatCongHopDucSan(){
    this.router.navigate(['tieu-chuan-vat-lieu-san-xuat-cong-hop-duc-san']);
  }

  banVeThietKeKyThuatCongHopDucSan(){
    this.router.navigate(['ban-ve-thiet-ke-cong-hop-duc-san']);
  }

  congBeTongDucSan(){
    this.router.navigate(['cong-be-tong-duc-san']);
  }

  hoiThiNauAnCongBeTong(){
    this.router.navigate(['hoi-thi-nau-an-cong-be-tong']);
  }

  leCongBoLienDanhNittaSongDay(){
    this.router.navigate(['le-cong-bo-lien-danh-nitta-song-day']);
  }
}
