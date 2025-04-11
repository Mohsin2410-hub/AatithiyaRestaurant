import { Component, OnInit } from '@angular/core';
import { imageUploadTable, ImgUploadService } from '../../../apiServices/imageUpload';
import { token, url } from '../../../apiServices/globals';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { changeHeading, getHeading } from '../../admin-panel/saidbar-admin/saidbar-admin.component';
import { of } from 'rxjs';

@Component({
  selector: 'app-banquet-detail',
  imports: [MatTableModule],
  templateUrl: './banquet-detail.component.html',
  styleUrl: './banquet-detail.component.css'        
})
export class BanquetDetailComponent implements OnInit {
  sideNavStatus: boolean = false;
    
  getHeading = getHeading;
  setHeading = changeHeading;

  dataSource = new MatTableDataSource<imageUploadTable>();
  dataColumns: string[];
  tmp: imageUploadTable[] = [];
  formData = new FormData();
  img!: File;
  defaultImg: string[] = [
    "./image/B1.jpg",
    "./image/B2.jpg",
    "./image/B3.jpg",
    "./image/B4.jpg"
  ]

  filename: string = ""
  constructor(
    private imgUpload: ImgUploadService,
    private router: Router
  )
  {
    this.setHeading("Banquet");
    this.imgUpload.getAllImgByCategory(2).subscribe(m => {
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
              imgCategory: "Banquet",
              imgTitle: d.imgTitle,
              imgUrl: d.imgUrl ? d.imgUrl : "Default image called",
              imgLongUrl: d.imgUrl ? `${url}/Banquet_img/${d.imgUrl}` : this.defaultImg[count-1]
            })
          }
        }
      )
      if (this.tmp.length === 3)
        this.tmp.push({
          id: 4,
          imgCategory: "Banquet",
          imgTitle: "img4",
          imgUrl: "Default Image Selected",
          imgLongUrl: this.defaultImg[3]
        })
      this.dataSource.data = this.tmp;
    });
    this.dataColumns = ['rowIndex', 'Title', 'Url', 'Image', 'id']
  }

  ngOnInit(): void {
    if (!token())
    {
      window.alert("User not logged in");
      this.router.navigate(["/"]);
    }
  }

  uploadImg(fName: string) {
    this.formData = new FormData(); // Reset before each use
  
    // Prepare FormData
    this.formData.append("ImgUrl", fName);
    this.formData.append("ImgCategory", "2");
    this.formData.append("ImgTitle", fName);
    this.formData.append("ImgName", fName);
    this.formData.append("IsMainDisp", "true");
    this.formData.append("isMenu", "false");
    this.formData.append("IsGallery", "false");
    this.formData.append("file", this.img);
  
    this.imgUpload.getAllImgByCategory(2).subscribe({
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