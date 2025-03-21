import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaidbarAdminComponent } from './saidbar-admin.component';

describe('SaidbarAdminComponent', () => {
  let component: SaidbarAdminComponent;
  let fixture: ComponentFixture<SaidbarAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaidbarAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaidbarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
