import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tuoi-tho-cua-be-tong-cot-thep',
  templateUrl: './tuoi-tho-cua-be-tong-cot-thep.component.html',
  styleUrls: ['./tuoi-tho-cua-be-tong-cot-thep.component.scss']
})
export class TuoiThoCuaBeTongCotThepComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  baoGiaCongTron() {
    this.router.navigate(['bao-gia-cong-tron']);
  }
}
