import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanquetRestaurentComponent } from './banquet-restaurent.component';

describe('BanquetRestaurentComponent', () => {
  let component: BanquetRestaurentComponent;
  let fixture: ComponentFixture<BanquetRestaurentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BanquetRestaurentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanquetRestaurentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
