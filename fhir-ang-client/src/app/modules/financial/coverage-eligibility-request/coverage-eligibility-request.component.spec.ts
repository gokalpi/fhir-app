import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageEligibilityRequestComponent } from './coverage-eligibility-request.component';

describe('CoverageEligibilityRequestComponent', () => {
  let component: CoverageEligibilityRequestComponent;
  let fixture: ComponentFixture<CoverageEligibilityRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverageEligibilityRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageEligibilityRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
