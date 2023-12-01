import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherproblemsComponent } from './otherproblems.component';

describe('OtherproblemsComponent', () => {
  let component: OtherproblemsComponent;
  let fixture: ComponentFixture<OtherproblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherproblemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtherproblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
