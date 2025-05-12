import { Router } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  form!: FormGroup;

  router = inject(Router);

  constructor(private formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  register(){
    this.router.navigate(['register']);
  }
  login(){
    this.router.navigate(['home'])
  }

}
