import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-le-cong-bo-lien-danh-nitta-song-day',
  templateUrl: './le-cong-bo-lien-danh-nitta-song-day.component.html',
  styleUrls: ['./le-cong-bo-lien-danh-nitta-song-day.component.scss']
})
export class LeCongBoLienDanhNittaSongDayComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  congKichNgam() {
    this.router.navigate(['cong-kich-ngam']);
  }

  baoGiaCongHop() {
    this.router.navigate(['bao-gia-cong-hop']);
  }

  baoGiaCongTron() {
    this.router.navigate(['bao-gia-cong-tron']);
  }
}
