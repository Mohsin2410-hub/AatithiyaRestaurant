import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { changeHeading, getHeading } from '../saidbar-admin/saidbar-admin.component';

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

 constructor()
 {
  this.setHeading("Home");
 }
}
