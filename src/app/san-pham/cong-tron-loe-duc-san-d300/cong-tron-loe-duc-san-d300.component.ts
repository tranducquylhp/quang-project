import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cong-tron-loe-duc-san-d300',
  templateUrl: './cong-tron-loe-duc-san-d300.component.html',
  styleUrls: ['./cong-tron-loe-duc-san-d300.component.scss']
})
export class CongTronLoeDucSanD300Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  banVeThietKeOngCong() {
    this.router.navigate(['ban-ve-thiet-ke-ong-cong']);
  }

  baoGiaCongTron() {
    this.router.navigate(['bao-gia-cong-tron']);
  }
}
