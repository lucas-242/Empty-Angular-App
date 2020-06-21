import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  startYear: 2019;
  get endYear() {
    return new Date().getFullYear();
  }

  constructor() { }

  ngOnInit() {
  }

}
