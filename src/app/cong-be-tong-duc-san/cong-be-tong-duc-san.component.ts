import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cong-be-tong-duc-san',
  templateUrl: './cong-be-tong-duc-san.component.html',
  styleUrls: ['./cong-be-tong-duc-san.component.scss']
})
export class CongBeTongDucSanComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  baoGiaCongHop() {
    this.router.navigate(['bao-gia-cong-hop']);
  }
}
