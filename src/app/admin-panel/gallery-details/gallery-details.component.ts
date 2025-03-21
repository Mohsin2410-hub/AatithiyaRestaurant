import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { changeHeading, getHeading } from '../saidbar-admin/saidbar-admin.component';

@Component({
  selector: 'app-gallery-details',
  imports: [NgClass],
  templateUrl: './gallery-details.component.html',
  styleUrl: './gallery-details.component.css'
})
export class GalleryDetailsComponent {
  sideNavStatus: boolean = false;

  getHeading = getHeading;
  setHeading = changeHeading;

  constructor() {
    this.setHeading("Gallery");
  }
}
