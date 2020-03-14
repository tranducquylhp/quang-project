import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-danh-muc-san-pham',
  templateUrl: './danh-muc-san-pham.component.html',
  styleUrls: ['./danh-muc-san-pham.component.scss']
})
export class DanhMucSanPhamComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  routerCongTron() {
    this.router.navigate(['cong-tron']);
  }

  routerCongHopDon() {
    this.router.navigate(['cong-hop-don']);
  }

  routerCongHopDoi() {
    this.router.navigate(['cong-hop-doi']);
  }

  routerHaoKyThuat() {
    this.router.navigate(['hao-ky-thuat']);
  }

  routerHoGaDucSan() {
    this.router.navigate(['ho-ga-duc-san']);
  }

  routerCongKichNgam() {
    this.router.navigate(['cong-kich-ngam']);
  }

  routerBeTongVom() {
    this.router.navigate(['be-tong-vom']);
  }
}
