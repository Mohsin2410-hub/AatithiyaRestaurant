import { Component } from '@angular/core';
import { changeHeading, getHeading } from '../saidbar-admin/saidbar-admin.component';
import { imageUploadTable, ImgUploadService } from '../../../apiServices/imageUpload';
import { Router } from '@angular/router';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { token, url } from '../../../apiServices/globals';
import { of } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-food-type-details',
  imports: [MatTableModule, NgClass, MatButtonModule],
  templateUrl: './food-type-details.component.html',
  styleUrl: './food-type-details.component.css'
})
export class FoodTypeDetailsComponent {
  sideNavStatus: boolean = false;
  
  getHeading = getHeading;
  setHeading = changeHeading;
  dataSource = new MatTableDataSource<imageUploadTable>();
  dataColumns: string[];
  tmp: imageUploadTable[] = [];
  formData = new FormData();
  img!: File;
  defaultImg: string[] = [
    "./image/panner butter masala.png",
    "./image/Manchurian dish.png",
    "./image/baked spaghetti with pineapple.png"
  ]

  ngOnInit(): void {
    if (!token())
    {
      window.alert("User not logged in");
      this.router.navigate(["/"]);
    }
  }


  constructor(
    private imgUpload: ImgUploadService,
    private router: Router
  ) {
    this.setHeading("Food-type");
    this.imgUpload.getAllImgByCategory(4).subscribe(m => {
      const images = m.response.data;

      let count = 0
      images
      .sort(
        (a, b) => parseInt(a.imgTitle.charAt(3)) - parseInt(b.imgTitle.charAt(3))
      )
      .map(
        d => {
          if (d.isMainDisp)
          {
            count++;
            this.tmp.push({
              id: count,
              imgCategory: "Type Of Food",
              imgTitle: d.imgTitle,
              imgUrl: d.imgUrl ? d.imgUrl : "Default image called",
              imgLongUrl: d.imgUrl ? `${url}/TypesofFood_img/${d.imgUrl}` : this.defaultImg[count-1]
            })
          }
        }
      )
      if (this.tmp.length === 2)
        this.tmp.push({
          id: 3,
          imgCategory: "Type of Food",
          imgTitle: "img3",
          imgUrl: "Default Image Selected",
          imgLongUrl: this.defaultImg[2]
        })
      this.dataSource.data = this.tmp;
    });
    this.dataColumns = ['rowIndex', 'Title', 'Url', 'Image', 'id']
  }

  uploadImg(fName: string) {
    this.formData = new FormData(); // Reset before each use

    // Prepare FormData
    this.formData.append("ImgUrl", fName);
    this.formData.append("ImgCategory", "4");
    this.formData.append("ImgTitle", fName);
    this.formData.append("ImgName", fName);
    this.formData.append("IsMainDisp", "true");
    this.formData.append("isMenu", "false");
    this.formData.append("IsGallery", "false");
    this.formData.append("file", this.img);
  
    this.imgUpload.getAllImgByCategory(4).subscribe({
      next: (m) => {
        const delIds = m.response.data
          .filter((d: any) => (d.imgTitle === fName || d.imgName === fName))
          .map((d: any) => d.id);
  
        const delete$ = delIds.length > 0
          ? this.imgUpload.deleteImgs(delIds)
          : of({});
  
        delete$.subscribe({
          next: () => {
            this.imgUpload.uploadImg(this.formData).subscribe({
              next: (data: any) => {
                window.location.reload();
  
                window.alert("Upload successful");
              },
              error: (err: any) => {
                window.alert(err.error.message);
              }
            });
          },
          error: (err: any) => {
            window.alert("Failed to delete old images: " + err.error.message);
          }
        });
      },
      error: (err: any) => {
        window.alert("Failed to fetch existing images: " + err.error.message);
      }
    });
  }

  triggerFileInput(fileInput: HTMLInputElement) {
    fileInput.click();
  }
  
  onFileSelect(event: any, fName: string) {
    this.img = event.target.files[0];
    this.uploadImg(fName);
  }
}
