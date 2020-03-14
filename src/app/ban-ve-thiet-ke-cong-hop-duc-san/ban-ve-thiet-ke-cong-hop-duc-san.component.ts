import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ban-ve-thiet-ke-cong-hop-duc-san',
  templateUrl: './ban-ve-thiet-ke-cong-hop-duc-san.component.html',
  styleUrls: ['./ban-ve-thiet-ke-cong-hop-duc-san.component.scss']
})
export class BanVeThietKeCongHopDucSanComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  banVeThietKeOngCong() {
    this.router.navigate(['ban-ve-thiet-ke-ong-cong'])
  }

  baoGiaCongHop() {
    this.router.navigate(['bao-gia-cong-hop']);
  }

  congHopBeTongDucSan() {
    this.router.navigate(['cong-hop-be-tong-duc-san']);
  }
}
