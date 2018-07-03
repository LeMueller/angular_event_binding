import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  imgUrl: string = "http://via.placeholder.com/350x150";

  size: number = 20;

  divClass: string = '';

  isBig: boolean = false;

  isDev: boolean = true;

  ngDivClass: any = {
    a: false,
    b: false,
    c: false,
  };

  ngDivStyle: any = {
    color: 'red',
    background: 'yellow',
  };

  name: string = '';

  constructor() {
    setTimeout(()=>{
      this.divClass = "a b c";
      this.isBig = true;
      this.ngDivClass = {
        a: true,
        b: true,
        c: true,
      };
      this.isDev = false;
      this.ngDivStyle = {
        color: 'yellow',
        background: 'green',
      };
    }, 3000);

    setInterval(()=>{
      this.name="Tom";
    }, 3000);
  }

  ngOnInit() {
  }

  doOnClick(event: any) {
    console.log(event);
    
  }

  doOnInput(event: any) {
    console.log(event.target.value);

    console.log(event.target.getAttribute('value'));
  }

  doOnInput2(event: any) {
    this.name = event.target.value;
  }

}
