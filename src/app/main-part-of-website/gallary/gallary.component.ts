import { Component } from '@angular/core';
declare var Swiper: any;
@Component({
  selector: 'app-gallary',
  imports: [],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})
export class GallaryComponent {
  ngOnInit(): void {
    new Swiper('.card-wrapper', {
      loop: true,
      spaceBetween: 30,
      // Pagination bullets
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
      },
      // Navigation arrows
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      // Responsive breakpoints
      breakpoints: {
          0: {
              slidesPerView: 1
          },
          768: {
              slidesPerView: 2
          },
          1024: {
              slidesPerView: 3
          }
          
      }
      
      
  });
    // new Swiper('.swiper-container', {
    //   loop: true,
    //   slidesPerView: 1,
    //   spaceBetween: 10,
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    // });
  }

}
