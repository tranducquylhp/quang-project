import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-be-tong-vom',
  templateUrl: './be-tong-vom.component.html',
  styleUrls: ['./be-tong-vom.component.scss']
})
export class BeTongVomComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  tamVomBeTong() {
    this.router.navigate(['tam-vom-be-tong']);
  }
}
