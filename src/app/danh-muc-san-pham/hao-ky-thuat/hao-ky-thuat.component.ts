import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hao-ky-thuat',
  templateUrl: './hao-ky-thuat.component.html',
  styleUrls: ['./hao-ky-thuat.component.scss']
})
export class HaoKyThuatComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  baoGiaHaoKyThuat() {
    this.router.navigate(['bao-gia-hao-ky-thuat']);
  }

  haoKyThuatDucSan() {
    this.router.navigate(['hao-ky-thuat-duc-san']);
  }
}
