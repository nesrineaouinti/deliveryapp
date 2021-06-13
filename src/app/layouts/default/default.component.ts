import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor() { }

  ngOnInit()  {
    //Toggle Click Function
    $("#menu-toggle").on("click",function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

}
