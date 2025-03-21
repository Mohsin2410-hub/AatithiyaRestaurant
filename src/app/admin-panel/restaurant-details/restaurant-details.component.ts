import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { changeHeading, getHeading } from '../saidbar-admin/saidbar-admin.component';

@Component({
  selector: 'app-restaurant-details',
  imports: [NgClass],
  templateUrl: './restaurant-details.component.html',
  styleUrl: './restaurant-details.component.css'
})
export class RestaurantDetailsComponent {
  sideNavStatus: boolean = false;
  
    getHeading = getHeading;
    setHeading = changeHeading;
  
    constructor() {
      this.setHeading("Restaurant");
    }

}
