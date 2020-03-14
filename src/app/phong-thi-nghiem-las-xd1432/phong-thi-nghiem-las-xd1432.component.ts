import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-phong-thi-nghiem-las-xd1432',
  templateUrl: './phong-thi-nghiem-las-xd1432.component.html',
  styleUrls: ['./phong-thi-nghiem-las-xd1432.component.scss']
})
export class PhongThiNghiemLasXd1432Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  congTron() {
    this.router.navigate(['cong-tron']);
  }

  phongThiNghiemLasXd1432() {
    this.router.navigate(['phong-thi-nghiem-las-xd-1432']);
  }
}
