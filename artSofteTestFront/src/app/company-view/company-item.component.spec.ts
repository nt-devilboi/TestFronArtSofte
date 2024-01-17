import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyItemComponent } from './company-item.component';

describe('CompanyViewComponent', () => {
  let component: CompanyItemComponent;
  let fixture: ComponentFixture<CompanyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
