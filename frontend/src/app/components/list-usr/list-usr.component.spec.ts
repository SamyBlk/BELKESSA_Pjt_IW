import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsrComponent } from './list-usr.component';

describe('ListUsrComponent', () => {
  let component: ListUsrComponent;
  let fixture: ComponentFixture<ListUsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListUsrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
