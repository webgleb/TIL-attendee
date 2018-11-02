import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokeredComponent } from './brokered.component';

describe('BrokeredComponent', () => {
  let component: BrokeredComponent;
  let fixture: ComponentFixture<BrokeredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokeredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokeredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
