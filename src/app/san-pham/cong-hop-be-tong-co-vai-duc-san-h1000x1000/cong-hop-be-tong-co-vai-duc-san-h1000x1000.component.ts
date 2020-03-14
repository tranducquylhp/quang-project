import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cong-hop-be-tong-co-vai-duc-san-h1000x1000',
  templateUrl: './cong-hop-be-tong-co-vai-duc-san-h1000x1000.component.html',
  styleUrls: ['./cong-hop-be-tong-co-vai-duc-san-h1000x1000.component.scss']
})
export class CongHopBeTongCoVaiDucSanH1000x1000Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  congHopBeTongCoVaiDucSanH1000x1000() {
    this.router.navigate(['cong-hop-be-tong-co-vai-duc-san-H1000x1000']);
  }
}
