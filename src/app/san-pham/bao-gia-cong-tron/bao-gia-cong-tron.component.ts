import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bao-gia-cong-tron',
  templateUrl: './bao-gia-cong-tron.component.html',
  styleUrls: ['./bao-gia-cong-tron.component.scss']
})
export class BaoGiaCongTronComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  beTongCotThepLaGi() {
    this.router.navigate(['be-tong-cot-thep-la-gi']);
  }

  banVeThietKeOngCong() {
    this.router.navigate(['ban-ve-thiet-ke-ong-cong']);
  }

  baoGiaCongTron() {
    this.router.navigate(['bao-gia-cong-tron']);
  }

  baoGiaCongHop() {
    this.router.navigate(['bao-gia-cong-hop']);
  }

  tieuChuanQuocGiaOngBeTongCotThepThoatNuoc() {
    this.router.navigate(['tieu-chuan-quoc-gia-ong-be-tong-cot-thep-thoat-nuoc']);
  }

  chungChiChatLuong() {
    this.router.navigate(['chung-chi-chat-luon']);
  }
}
