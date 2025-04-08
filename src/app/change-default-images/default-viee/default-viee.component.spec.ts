import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultVieeComponent } from './default-viee.component';

describe('DefaultVieeComponent', () => {
  let component: DefaultVieeComponent;
  let fixture: ComponentFixture<DefaultVieeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultVieeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultVieeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
