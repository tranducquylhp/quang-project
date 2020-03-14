import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ho-so-phap-ly',
  templateUrl: './ho-so-phap-ly.component.html',
  styleUrls: ['./ho-so-phap-ly.component.scss']
})
export class HoSoPhapLyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
