import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dich-vu',
  templateUrl: './dich-vu.component.html',
  styleUrls: ['./dich-vu.component.scss']
})
export class DichVuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  dichVuVanChuyen() {
    this.router.navigate(['dich-vu-van-chuyen']);
  }

  dichVuThiNghiem() {
    this.router.navigate(['dich-vu-thi-nghiem']);
  }
}
