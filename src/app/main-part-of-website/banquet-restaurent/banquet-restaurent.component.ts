import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImgUploadService } from '../../../apiServices/imageUpload';
import { url } from '../../../apiServices/globals';

@Component({
  selector: 'app-banquet-restaurent',
  imports: [RouterLink],
  templateUrl: './banquet-restaurent.component.html',
  styleUrl: './banquet-restaurent.component.css'
})
export class BanquetRestaurentComponent {

  private setLatestImage(data: any, title: string): string {
    const filtered = data.filter((img: any) => img.imgTitle === title);
    if (filtered.length === 0) return ""; // fallback
  
    const latest = filtered.reduce((a: any, b: any) => (a.id > b.id ? a : b));
    return `${url}/Banquet_img/${latest.imgUrl}`;
  }

  img1: string = "./image/B5.jpg"
  img2: string = "./image/B4.jpg"
  img3: string = "./image/B3.jpg"
  img4: string = "./image/B1.jpg"

  constructor(
    private imgGetService: ImgUploadService
  )
  {
    this.imgGetService.getAllImgByCategory(2).subscribe(m => {
      const images = m.response.data;
      this.img1 = this.setLatestImage(images, "img1") || this.img1;
      this.img2 = this.setLatestImage(images, "img2") || this.img2;
      this.img3 = this.setLatestImage(images, "img3") || this.img3;
      this.img4 = this.setLatestImage(images, "img4") || this.img4;
    });
  }
}
