import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*
    $(document).ready(function() {
      $('.carousel.carousel-slider').carousel({fullWidth: true});
    });
    */
    $('.slider').slider();
  }

}
