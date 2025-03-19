import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginPageComponent {
  backgroundImg: string = 'Assets/sell-software-company.jpg';
  logoImg: string = 'Assets/garimaSystemsLogo.png';
  year = new Date().getFullYear();
  loginData: FormGroup;
  invalidUsername: boolean = false;
  invalidPassword: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
  ) {
    localStorage.clear();
    this.loginData = this._fb.group({
      userName: ["", [Validators.required]],
      passWord: ["", [Validators.required]]
    })
  }

 

  get userName()
  {
    return this.loginData.get('userName');
  }

  get passWord()
  {
    return this.loginData.get('passWord');
  }

  onSubmit() {
    if (this.loginData.invalid) {
      if (!this.userName?.value)
      {
        this.invalidUsername = true
        window.alert("Username not provided");
      }
      else if(!this.passWord?.value)
      {
        this.invalidPassword = true
        window.alert("Password is not provided");
      }
      else {
        this.invalidUsername = true
        this.invalidPassword = true
        window.alert("Nothing is provided");
      }
      return;
    }
    else {
      
        error: (err: any) => {
          window.alert("Wrong password")
          console.log(err)
        }
      }
    }
  }

