import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bao-gia-ho-ga',
  templateUrl: './bao-gia-ho-ga.component.html',
  styleUrls: ['./bao-gia-ho-ga.component.scss']
})
export class BaoGiaHoGaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  baoGiaCongTron() {
    this.router.navigate(['bao-gia-cong-tron']);
  }

  baoGiaCongHop() {
    this.router.navigate(['bao-gia-cong-hop']);
  }

  baoGiaHaoKyThuat() {
    this.router.navigate(['bao-gia-hao-ky-thuat']);
  }

  baoGiaHoGa() {
    this.router.navigate(['bao-gia-ho-ga']);
  }
}
