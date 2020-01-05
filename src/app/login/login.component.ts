import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private myPassword: '';
  private myLogin: '';

  constructor() { }

  ngOnInit() {
  }

  onClick() {
  }
}
