import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bao-gia-hao-ky-thuat',
  templateUrl: './bao-gia-hao-ky-thuat.component.html',
  styleUrls: ['./bao-gia-hao-ky-thuat.component.scss']
})
export class BaoGiaHaoKyThuatComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  beTongCotThepLaGi() {
    this.router.navigate(['be-tong-cot-thep-la-gi']);
  }

  baoGiaCongHop() {
    this.router.navigate(['bao-gia-cong-hop']);
  }

  lienHe() {
    this.router.navigate(['lien-he']);
  }

  congTron() {
    this.router.navigate(['cong-tron'])
  }
}
