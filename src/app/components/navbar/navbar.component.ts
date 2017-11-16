import { AuthService } from './../../core/auth.service';
import { Component, AfterViewInit } from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {

  constructor(public auth: AuthService) { }

  ngAfterViewInit() {
    $('.button-collapse').sideNav();
  }

}
