import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { changeHeading, getHeading } from '../saidbar-admin/saidbar-admin.component';

@Component({
  selector: 'app-baquet-details',
  imports: [NgClass],
  templateUrl: './baquet-details.component.html',
  styleUrl: './baquet-details.component.css'
})
export class BaquetDetailsComponent {
sideNavStatus: boolean = false;
  
   getHeading = getHeading;
   setHeading = changeHeading;
  
   constructor()
   {
    this.setHeading("Banquet");
   }
}