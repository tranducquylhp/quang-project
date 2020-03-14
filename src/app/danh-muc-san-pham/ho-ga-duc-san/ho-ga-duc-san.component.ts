import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ho-ga-duc-san',
  templateUrl: './ho-ga-duc-san.component.html',
  styleUrls: ['./ho-ga-duc-san.component.scss']
})
export class HoGaDucSanComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  baoGiaHoGa() {
    this.router.navigate(['bao-gia-ho-ga']);
  }
}
