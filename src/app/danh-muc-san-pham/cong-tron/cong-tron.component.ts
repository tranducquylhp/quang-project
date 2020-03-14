import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cong-tron',
  templateUrl: './cong-tron.component.html',
  styleUrls: ['./cong-tron.component.scss']
})
export class CongTronComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  baoGiaCongTron() {
    this.router.navigate(['bao-gia-cong-tron']);
  }

  congTronLoeDucSanD1000() {
    this.router.navigate(['cong-tron-loe-duc-san-D1000']);
  }

  congTronLoeDucSanD1250() {
    this.router.navigate(['cong-tron-loe-duc-san-D1250']);
  }

  congTronLoeDucSanD1500() {
    this.router.navigate(['cong-tron-loe-duc-san-D1500']);
  }

  congTronLoeDucSanD2000() {
    this.router.navigate(['cong-tron-loe-duc-san-D2000']);
  }

  congTronLoeDucSanD2500() {
    this.router.navigate(['cong-tron-loe-duc-san-D2500']);
  }

  congTronLoeDucSanD400() {
    this.router.navigate(['cong-tron-loe-duc-san-D400']);
  }

  congTronLoeDucSanD500() {
    this.router.navigate(['cong-tron-loe-duc-san-D500']);
  }

  congTronLoeDucSanD600() {
    this.router.navigate(['cong-tron-loe-duc-san-D600']);
  }

  congTronLoeDucSanD800() {
    this.router.navigate(['cong-tron-loe-duc-san-D800']);
  }

  congTronLoeDucSanD300() {
    this.router.navigate(['cong-tron-loe-duc-san-D300']);
  }
}
