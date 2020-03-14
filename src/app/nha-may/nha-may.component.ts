import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nha-may',
  templateUrl: './nha-may.component.html',
  styleUrls: ['./nha-may.component.scss']
})
export class NhaMayComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  nhaMaySanXuatVLXDSongDay1() {
    this.router.navigate(['nha-may-san-xuat-vlxd-song-day-1']);
  }

  nhaMaySanXuatVLXDSongDay2() {
    this.router.navigate(['nha-may-san-xuat-vlxd-song-day-2']);
  }

  nhaMaySanXuatCongKichNgamNittaSongDay() {
    this.router.navigate(['nha-may-san-xuat-cong-kich-ngam-nitta-song-day']);
  }

  phongThiNghiemLasXD1432() {
    this.router.navigate(['phong-thi-nghiem-las-xd-1432']);
  }
}
