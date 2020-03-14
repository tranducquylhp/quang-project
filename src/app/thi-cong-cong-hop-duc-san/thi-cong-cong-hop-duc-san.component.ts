import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-thi-cong-cong-hop-duc-san',
  templateUrl: './thi-cong-cong-hop-duc-san.component.html',
  styleUrls: ['./thi-cong-cong-hop-duc-san.component.scss']
})
export class ThiCongCongHopDucSanComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  baoGiaCongHop() {
    this.router.navigate(['bao-gia-cong-hop']);
  }

  baoGiaHoGa() {
    this.router.navigate(['bao-gia-ho-ga']);
  }
}
