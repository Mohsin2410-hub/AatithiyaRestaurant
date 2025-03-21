import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaquetDetailsComponent } from './baquet-details.component';

describe('BaquetDetailsComponent', () => {
  let component: BaquetDetailsComponent;
  let fixture: ComponentFixture<BaquetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaquetDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaquetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
