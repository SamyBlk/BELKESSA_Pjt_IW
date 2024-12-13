import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUsrComponent } from './detail-usr.component';

describe('DetailUsrComponent', () => {
  let component: DetailUsrComponent;
  let fixture: ComponentFixture<DetailUsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailUsrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
