import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent implements OnInit {
  title: string = 'Epix stuff!';

  testFunc() {
    console.log(this)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
