import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-be-tong-cot-thep-la-gi',
  templateUrl: './be-tong-cot-thep-la-gi.component.html',
  styleUrls: ['./be-tong-cot-thep-la-gi.component.scss']
})
export class BeTongCotThepLaGiComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  baoGiaCongHop() {
    this.router.navigate(['bao-gia-cong-hop']);
  }

  baoGiaCongTron() {
    this.router.navigate(['bao-gia-cong-tron']);
  }
}
