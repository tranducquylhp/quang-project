import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cong-kich-ngam',
  templateUrl: './cong-kich-ngam.component.html',
  styleUrls: ['./cong-kich-ngam.component.scss']
})
export class CongKichNgamComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  congKichNgamJackingPipe() {
    this.router.navigate(['cong-kich-ngam-jacking-pipe']);
  }
}
