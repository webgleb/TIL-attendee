import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MindedAttendeesComponent } from './minded-attendees.component';

describe('MindedAttendeesComponent', () => {
  let component: MindedAttendeesComponent;
  let fixture: ComponentFixture<MindedAttendeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindedAttendeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindedAttendeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
