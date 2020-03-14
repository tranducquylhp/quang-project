import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  congBeTongDucSan(){
    this.router.navigate(['cong-be-tong-duc-san']);
  }

  congTron() {
    this.router.navigate(['cong-tron']);
  }

  congHopDon() {
    this.router.navigate(['cong-hop-don']);
  }

  hoGaDucSan() {
    this.router.navigate(['ho-ga-duc-san']);
  }
}
