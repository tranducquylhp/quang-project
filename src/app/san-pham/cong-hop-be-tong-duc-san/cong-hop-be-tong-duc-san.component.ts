import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cong-hop-be-tong-duc-san',
  templateUrl: './cong-hop-be-tong-duc-san.component.html',
  styleUrls: ['./cong-hop-be-tong-duc-san.component.scss']
})
export class CongHopBeTongDucSanComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  congHopBeTongDucSan() {
    this.router.navigate(['cong-hop-be-tong-duc-san']);
  }
}
