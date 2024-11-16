import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequest } from '../../services/models/authentication-request';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  authRequest: AuthenticationRequest = { email: '', password: '' };
  errorMsg: string[] = [];

  login() {

  }

  register() {

  }
}
