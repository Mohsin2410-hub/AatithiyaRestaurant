import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { imageUpload, ImgUploadService } from '../../../apiServices/imageUpload';
import { token, url } from '../../../apiServices/globals';
import { Router, RouterLink } from '@angular/router';
import { changeHeading, getHeading } from '../../admin-panel/saidbar-admin/saidbar-admin.component';

@Component({
  selector: 'app-banquet-detail',
  imports: [],
  templateUrl: './banquet-detail.component.html',
  styleUrl: './banquet-detail.component.css'
})
export class BanquetDetailComponent implements OnInit {
  sideNavStatus: boolean = false;
    
     getHeading = getHeading;
     setHeading = changeHeading;
  formData = new FormData();
  img!: File;
  uploadedImg1: string = "./image/B1.jpg"
  uploadedImg2: string = "./image/B2.jpg"
  uploadedImg3: string = "./image/B3.jpg"
  uploadedImg4: string = "./image/B4.jpg"

  filename: string = ""
  constructor(
    private imgUpload: ImgUploadService,
    private router: Router
  )
  {
    this.setHeading("Banquet");
    this.imgUpload.getAllImgByCategory(2).subscribe(m => {
      const images = m.response.data;
      this.uploadedImg1 = this.setLatestImage(images, "img1") || this.uploadedImg1;
      this.uploadedImg2 = this.setLatestImage(images, "img2") || this.uploadedImg2;
      this.uploadedImg3 = this.setLatestImage(images, "img3") || this.uploadedImg3;
      this.uploadedImg4 = this.setLatestImage(images, "img4") || this.uploadedImg4;
    });
  }

  ngOnInit(): void {
    if (!token())
    {
      window.alert("User not logged in");
      this.router.navigate(["/"]);
    }
  }

  private setLatestImage(data: any, title: string): string {
    const filtered = data.filter((img: any) => img.imgTitle === title);
    if (filtered.length === 0) return ""; // fallback
  
    const latest = filtered.reduce((a: any, b: any) => (a.id > b.id ? a : b));
    return `${url}/Banquet_img/${latest.imgUrl}`;
  }

  uploadImg(fName: string) {
    this.formData = new FormData(); // Reset before each use
  
    this.formData.append("ImgUrl", fName);
    this.formData.append("ImgCategory", "2");
    this.formData.append("ImgTitle", fName);
    this.formData.append("file", this.img);
  
    this.imgUpload.uploadImg(this.formData)
      .subscribe({
        next: (data: any) => {
          const uploadedPath = `${url}/Banquet_img/${data.data}`;
          switch (fName) {
            case "img1":
              this.uploadedImg1 = uploadedPath;
              break;
            case "img2":
              this.uploadedImg2 = uploadedPath;
              break;
            case "img3":
              this.uploadedImg3 = uploadedPath;
              break;
            case "img4":
              this.uploadedImg4 = uploadedPath;
              break;
          }
          window.alert("Upload successful");
        },
        error: (err: any) => {
          window.alert(err.error.message);
        }
      });
  }  

  onFileSelect(event: any, fName: string) {
    this.img = event.target.files[0];
    this.uploadImg(fName);
}
}