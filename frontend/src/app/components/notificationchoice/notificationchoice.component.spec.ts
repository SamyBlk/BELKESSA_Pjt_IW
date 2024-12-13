import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationchoiceComponent } from './notificationchoice.component';

describe('NotificationchoiceComponent', () => {
  let component: NotificationchoiceComponent;
  let fixture: ComponentFixture<NotificationchoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationchoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationchoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
