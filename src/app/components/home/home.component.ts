import { AuthService } from './../../core/auth.service';
import { Component, AfterViewInit } from '@angular/core';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(public auth: AuthService) { }

  ngAfterViewInit() {
    /*
    $(document).ready(function() {
      $('.carousel.carousel-slider').carousel({fullWidth: true});
    });
    */
    $('.slider').slider();
  }

}
