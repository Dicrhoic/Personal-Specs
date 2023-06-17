import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcPartDetailComponent } from './pc-part-detail.component';

describe('PcPartDetailComponent', () => {
  let component: PcPartDetailComponent;
  let fixture: ComponentFixture<PcPartDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PcPartDetailComponent]
    });
    fixture = TestBed.createComponent(PcPartDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
