import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cong-hop-doi',
  templateUrl: './cong-hop-doi.component.html',
  styleUrls: ['./cong-hop-doi.component.scss']
})
export class CongHopDoiComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  baoGiaCongHop() {
    this.router.navigate(['bao-gia-cong-hop']);
  }

  congHopDoiDucSan() {
    this.router.navigate(['cong-hop-doi-duc-san']);
  }

  congHopDoiDucSanH2x1000x1500() {
    this.router.navigate(['cong-hop-doi-duc-san-H2x1000x1500']);
  }

  congHopDoiDucSanH2x1500x1500() {
    this.router.navigate(['cong-hop-doi-duc-san-H2x1500x1500']);
  }

  congHopDoiDucSanH2x2000x2000() {
    this.router.navigate(['cong-hop-doi-duc-san-H2x2000x2000']);
  }

  congHopDoiDucSanH2x2000x2500() {
    this.router.navigate(['cong-hop-doi-duc-san-H2x2000x2500']);
  }

  congHopDoiDucSanH2x2500x2000() {
    this.router.navigate(['cong-hop-doi-duc-san-H2x2500x2000']);
  }

  congHopDoiDucSanH2x2500x2500() {
    this.router.navigate(['cong-hop-doi-duc-san-H2x2500x2500']);
  }

  congHopDoiDucSanH2x3000x3000() {
    this.router.navigate(['cong-hop-doi-duc-san-H2x3000x3000']);
  }
}
