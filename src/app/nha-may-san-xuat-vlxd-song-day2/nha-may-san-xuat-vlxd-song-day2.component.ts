import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nha-may-san-xuat-vlxd-song-day2',
  templateUrl: './nha-may-san-xuat-vlxd-song-day2.component.html',
  styleUrls: ['./nha-may-san-xuat-vlxd-song-day2.component.scss']
})
export class NhaMaySanXuatVlxdSongDay2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  congTron() {
    this.router.navigate(['cong-tron']);
  }

  congHopDoi() {
    this.router.navigate(['cong-hop-doi']);
  }

  congHopBeTongDucSanH3000x3000() {
    this.router.navigate(['cong-hop-be-tong-duc-san-H3000x3000']);
  }
}
