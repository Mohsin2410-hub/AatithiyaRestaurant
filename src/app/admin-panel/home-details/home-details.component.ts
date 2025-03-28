import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { changeHeading, getHeading } from '../saidbar-admin/saidbar-admin.component';
import { OnInit } from '@angular/core';
import { getToken } from '../../../apiServices/globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-details',
  imports: [NgClass],
  templateUrl: './home-details.component.html',
  styleUrl: './home-details.component.css'
})
export class HomeDetailsComponent {
  
 sideNavStatus: boolean = false;

 getHeading = getHeading;
 setHeading = changeHeading;
 token: string | null = ""

 constructor(private _router: Router)
 {
  this.setHeading("Home");
  this.token = getToken();
  console.log(this.token)
  if (!this.token)
  {
    window.alert("Something wrong with the token");
    this._router.navigate([""]);
  }
 }
 
}
