import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { changeHeading, getHeading } from '../saidbar-admin/saidbar-admin.component';
import { ImgUploadService } from '../../../apiServices/imageUpload';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

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

  constructor(
      private imgUpload: ImgUploadService,
      private router: Router
  ) {
    this.setHeading("Gallery");
  }
}