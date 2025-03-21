import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTypeDetailsComponent } from './food-type-details.component';

describe('FoodTypeDetailsComponent', () => {
  let component: FoodTypeDetailsComponent;
  let fixture: ComponentFixture<FoodTypeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodTypeDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
