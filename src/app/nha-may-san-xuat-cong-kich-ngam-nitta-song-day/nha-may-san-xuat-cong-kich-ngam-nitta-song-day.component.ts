import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nha-may-san-xuat-cong-kich-ngam-nitta-song-day',
  templateUrl: './nha-may-san-xuat-cong-kich-ngam-nitta-song-day.component.html',
  styleUrls: ['./nha-may-san-xuat-cong-kich-ngam-nitta-song-day.component.scss']
})
export class NhaMaySanXuatCongKichNgamNittaSongDayComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  congKichNgamJackingPipe(){
    this.router.navigate(['cong-kich-ngam-acking-pipe']);
  }

  congTron() {
    this.router.navigate(['cong-tron']);
  }
}
