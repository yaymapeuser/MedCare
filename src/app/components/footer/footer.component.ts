import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  today: Date = new Date();
  pipe = new DatePipe('en-DE');
  year:any;

  constructor() { }

  ngOnInit(): void {
    this.year = this.pipe.transform(Date.now(), 'yyyy');
  }

}
