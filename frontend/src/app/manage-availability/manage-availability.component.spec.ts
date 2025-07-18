import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAvailabilityComponent } from './manage-availability.component';

describe('ManageAvailabilityComponent', () => {
  let component: ManageAvailabilityComponent;
  let fixture: ComponentFixture<ManageAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAvailabilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
