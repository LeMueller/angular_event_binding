import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  imgUrl: string = "http://via.placeholder.com/350x150";

  constructor() { }

  ngOnInit() {
  }

  doOnClick(event: any) {
    console.log(event);
    
  }

  doOnInput(event: any) {
    console.log(event.target.value);

    console.log(event.target.getAttribute('value'));
    
  }

}
