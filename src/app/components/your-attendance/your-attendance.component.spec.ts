import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourAttendanceComponent } from './your-attendance.component';

describe('YourAttendanceComponent', () => {
  let component: YourAttendanceComponent;
  let fixture: ComponentFixture<YourAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
