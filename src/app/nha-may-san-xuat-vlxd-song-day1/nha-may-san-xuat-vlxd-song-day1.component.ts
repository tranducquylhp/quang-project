import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nha-may-san-xuat-vlxd-song-day1',
  templateUrl: './nha-may-san-xuat-vlxd-song-day1.component.html',
  styleUrls: ['./nha-may-san-xuat-vlxd-song-day1.component.scss']
})
export class NhaMaySanXuatVlxdSongDay1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  congTron() {
    this.router.navigate(['cong-tron']);
  }
}
