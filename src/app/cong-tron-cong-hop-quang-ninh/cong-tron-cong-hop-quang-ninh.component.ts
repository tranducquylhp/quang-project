import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cong-tron-cong-hop-quang-ninh',
  templateUrl: './cong-tron-cong-hop-quang-ninh.component.html',
  styleUrls: ['./cong-tron-cong-hop-quang-ninh.component.scss']
})
export class CongTronCongHopQuangNinhComponent implements OnInit {

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
