import { Router } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  router = inject(Router);

  constructor() { }

  ngOnInit() {
  }

  register(){
    this.router.navigate(['register']);
  }
  login(){
    this.router.navigate(['home'])
  }

}
