import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImgUploadService } from '../../../apiServices/imageUpload';
import { setLatestImage, url } from '../../../apiServices/globals';

@Component({
  selector: 'app-banquet-restaurent',
  imports: [RouterLink],
  templateUrl: './banquet-restaurent.component.html',
  styleUrl: './banquet-restaurent.component.css'
})
export class BanquetRestaurentComponent {

  private setLatestImage(data: any, title: string, type: string): string {
    let t = type === "r" ? "Restaurant_img" : "Banquet_img"
    const filtered = data.filter((img: any) => img.imgTitle === title);
    if (filtered.length === 0) return ""; // fallback
  
    const latest = filtered.reduce((a: any, b: any) => (a.id > b.id ? a : b));
    return `${url}/${t}/${latest.imgUrl}`;
  }

  img1: string = "./image/B5.jpg"
  img2: string = "./image/B4.jpg"
  img3: string = "./image/B3.jpg"
  img4: string = "./image/B1.jpg"

  resImg1: string = "./image/B5.jpg"
  resImg2: string = "./image/B4.jpg"
  resImg3: string = "./image/B3.jpg"
  resImg4: string = "./image/B1.jpg"

  constructor(
    private imgGetService: ImgUploadService
  )
  {
    this.imgGetService.getAllImgByCategory(2).subscribe(m => {
      const images = m.response.data;
      this.img1 = this.setLatestImage(images, "img1", "b") || this.img1;
      this.img2 = this.setLatestImage(images, "img2", "b") || this.img2;
      this.img3 = this.setLatestImage(images, "img3", "b") || this.img3;
      this.img4 = this.setLatestImage(images, "img4", "b") || this.img4;
    });

    this.imgGetService.getAllImgByCategory(3).subscribe(m => {
      const images = m.response.data;
      this.resImg1 = this.setLatestImage(images, "img1", "r") || this.resImg1;
      this.resImg2 = this.setLatestImage(images, "img2", "r") || this.resImg2;
      this.resImg3 = this.setLatestImage(images, "img3", "r") || this.resImg3;
      this.resImg4 = this.setLatestImage(images, "img4", "r") || this.resImg4;
    });
  }
}