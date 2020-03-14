import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  routerLinkLichSu() {
    this.router.navigate(['lich-su-phat-trien']);
  }

  routerLinkCoCau() {
    this.router.navigate(['co-cau-to-chuc']);
  }

  routerLinkHoso() {
    this.router.navigate(['ho-so-phap-ly']);
  }

  routerLinkNangLuc() {
    this.router.navigate(['nang-luc-san-xuat']);
  }

  routerLinkChungChi() {
    this.router.navigate(['chung-chi-chat-luong']);
  }
}
