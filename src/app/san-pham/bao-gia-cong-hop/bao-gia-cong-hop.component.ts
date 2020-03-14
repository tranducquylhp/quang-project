import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bao-gia-cong-hop',
  templateUrl: './bao-gia-cong-hop.component.html',
  styleUrls: ['./bao-gia-cong-hop.component.scss']
})
export class BaoGiaCongHopComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  chungChiChatLuong() {
    this.router.navigate(['chung-chi-chat-luong']);
  }
}
