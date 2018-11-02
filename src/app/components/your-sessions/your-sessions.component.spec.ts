import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourSessionsComponent } from './your-sessions.component';

describe('YourSessionsComponent', () => {
  let component: YourSessionsComponent;
  let fixture: ComponentFixture<YourSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
