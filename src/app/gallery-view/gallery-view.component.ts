import { Component, OnInit } from '@angular/core';
import { imageUpload, ImgUploadService, uploadImgRes, imageUploadTable } from '../../apiServices/imageUpload';
import { NgFor, NgIf } from '@angular/common';
import { url } from '../../apiServices/globals';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery-view',
  imports: [NgFor, MatButtonModule, FormsModule, MatInputModule, MatFormFieldModule, NgSelectModule, NgIf, CommonModule],
  templateUrl: './gallery-view.component.html',
  styleUrl: './gallery-view.component.css'
})
export class GalleryViewComponent implements OnInit {
  images: imageUploadTable[] = []
  formData = new FormData();
  img!: File;
  selectedFile: File | null = null;
  selectedCategory: number | null = null;
  previewUrl: string | null = null;
  modalOpen = false;
  currentImage: any = null;
  id!: string;

  openLightbox(index: number) {
    this.currentImage = this.images[index];
    this.modalOpen = true;
  }

  closeLightbox() {
    this.modalOpen = false;
    this.currentImage = null;
  }

  categoryOptions = [
    { display: 'Restaurant', value: 3 },
    { display: 'Banquet', value: 2 },
    { display: 'Types of Food', value: 4 }
  ];

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedFile = file;
      this.img = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
    this.onSubmit();
  }

  change(tmp: number): string
  {
    if (tmp === 0)
      return "Menu"
    else if (tmp === 1)
      return "Gallery"
    else if (tmp === 2)
      return "Banquet"
    else if (tmp === 3)
      return "Restaurant"
    else if (tmp === 4)
      return "Types of Food"
    else
      return "Uploads"
  }

  changeDir(tmp: number): string
  {
    if (tmp === 0)
      return "Menu_img"
    else if (tmp === 1)
      return "Gallery_img"
    else if (tmp === 2)
      return "Banquet_img"
    else if (tmp === 3)
      return "Restaurant_img"
    else if (tmp === 4)
      return "TypesofFood_img"
    else
      return "Uploads"
  }

  uploadImg(fName: string) {
    this.formData = new FormData();

    this.formData.append("ImgUrl", fName);
    this.formData.append("ImgCategory", this.selectedCategory!.toString()); // bound from ng-select
    this.formData.append("ImgTitle", fName);
    this.formData.append("ImgName", fName);
    this.formData.append("IsMainDisp", "false");
    this.formData.append("isMenu", "false");
    this.formData.append("IsGallery", "true");
    this.formData.append("file", this.img);

    this.dataAccess.uploadImg(this.formData).subscribe({
      next: (data: any) => {
        window.location.reload();
        window.alert("Upload successful");
      },
      error: (err: any) => {
        window.alert(err.error.message);
      }
    });
  }

  onSubmit() {
    if (!this.selectedFile) return;

    const fName = this.selectedFile.name;
    this.uploadImg(fName);
  }

  switcher(i: number)
  {
    if (i === 1) return 2
    if (i === 2) return 3
    if (i === 3) return 4
    return 0
  }

  ngOnInit(): void {
    this.dataAccess.getAll().subscribe({
      next: (m: uploadImgRes) => {
        console.log('Raw API response:', m); // Debug: what are we actually getting?
  
        const data = m?.response?.data;
        if (!data || !Array.isArray(data)) {
          console.error('Unexpected API response structure:', m);
          return;
        }
  
        data.map((imgs: imageUpload) => {
          if (imgs.isGallery) {
            if (parseInt(this.id) != 0)
            {
              if (this.switcher(parseInt(this.id)) != imgs.imgCategory) return
                console.log('Image added to gallery:', imgs);
                this.images.push({
                  id: imgs.id,
                  imgCategory: this.change(imgs.imgCategory),
                  imgTitle: imgs.imgTitle,
                  imgLongUrl: `${url}/${this.changeDir(imgs.imgCategory)}/${imgs.imgUrl}`,
                  imgUrl: imgs.imgUrl
                });
              }
              else {
                this.images.push({
                  id: imgs.id,
                  imgCategory: this.change(imgs.imgCategory),
                  imgTitle: imgs.imgTitle,
                  imgLongUrl: `${url}/${this.changeDir(imgs.imgCategory)}/${imgs.imgUrl}`,
                  imgUrl: imgs.imgUrl
                });
            }
          }
        });
      },
      error: (err) => {
        console.error('Error fetching image data:', err);
      }
    });
  }

  constructor(
    private http: HttpClient,
    private dataAccess: ImgUploadService,
    private route: ActivatedRoute
  )
  {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('categoryId') || "0";
    })
  }
}