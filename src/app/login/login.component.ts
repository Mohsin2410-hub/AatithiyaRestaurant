import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../apiServices/intLogin';
import { ApiServices } from '../../apiServices/apiServices';
import { setToken, token, isLogin, setIsLogin } from '../../apiServices/globals';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData: FormGroup;
  invalidUsername: boolean = false;
  invalidPassword: boolean = false;
  
  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private apiService: ApiServices
  ) {
    localStorage.clear();
    this.loginData = this._fb.group({
      userName: ["", [Validators.required]],
      passWord: ["", [Validators.required]]
    })
  }
  
  ngOnInit() {
    console.log(isLogin)
  }

  get userName()
  {
    return this.loginData.get('userName');
  }

  get passWord()
  {
    return this.loginData.get('passWord');
  }

  onSubmit()
  {
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
      console.log("calling api")
      this.apiService.post(`/api/Login/LoginAuthentication?Username=${this.loginData.value.userName}&Password=${this.loginData.value.passWord}`, "").subscribe({
        next: (data: Login) => {
          setIsLogin(false)
          setToken(data.data.token, data.data.username);
        },
        error: (err: object | any) => {
          console.log(err)
          window.alert(err.name);
        }
      })
    }
  }
}
