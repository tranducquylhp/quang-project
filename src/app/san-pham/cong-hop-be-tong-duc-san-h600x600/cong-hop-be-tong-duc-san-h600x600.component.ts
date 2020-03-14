import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cong-hop-be-tong-duc-san-h600x600',
  templateUrl: './cong-hop-be-tong-duc-san-h600x600.component.html',
  styleUrls: ['./cong-hop-be-tong-duc-san-h600x600.component.scss']
})
export class CongHopBeTongDucSanH600x600Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  congHopBeTongDucSanH600x600() {
    this.router.navigate(['cong-hop-be-tong-duc-san-H600x600']);
  }

  congHopDon() {
    this.router.navigate(['cong-hop-don']);
  }
}
