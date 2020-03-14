import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cong-hop-don',
  templateUrl: './cong-hop-don.component.html',
  styleUrls: ['./cong-hop-don.component.scss']
})
export class CongHopDonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  baoGiaCongHop(){
    this.router.navigate(['bao-gia-cong-hop'])
  }

  congHopBeTongCoVaiDucSanH1000x1000() {
    this.router.navigate(['cong-hop-be-tong-co-vai-duc-san-H1000x1000']);
  }

  congHopBeTongDucSan() {
    this.router.navigate(['cong-hop-be-tong-duc-san']);
  }

  congHopBeTongDucSanH1000x1000() {
    this.router.navigate(['cong-hop-be-tong-duc-san-H1000x1000']);
  }

  congHopBeTongDucSanH1200x1200() {
    this.router.navigate(['cong-hop-be-tong-duc-san-H1200x1200']);
  }

  congHopBeTongDucSanH1500x1500() {
    this.router.navigate(['cong-hop-be-tong-duc-san-H1500x1500']);
  }

  congHopBeTongDucSanH2000x2000() {
    this.router.navigate(['cong-hop-be-tong-duc-san-H2000x2000']);
  }

  congHopBeTongDucSanH2500x2500() {
    this.router.navigate(['cong-hop-be-tong-duc-san-H2500x2500']);
  }

  congHopBeTongDucSanH3000x3000() {
    this.router.navigate(['cong-hop-be-tong-duc-san-H3000x3000']);
  }

  congHopBeTongDucSanH600x600() {
    this.router.navigate(['cong-hop-be-tong-duc-san-H600x600']);
  }

  congHopBeTongDucSanH600x800() {
    this.router.navigate(['cong-hop-be-tong-duc-san-H600x800']);
  }

  congHopBeTongDucSanH800x800() {
    this.router.navigate(['cong-hop-be-tong-duc-san-H800x800']);
  }
}
