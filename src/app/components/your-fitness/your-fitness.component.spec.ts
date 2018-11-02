import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourFitnessComponent } from './your-fitness.component';

describe('YourFitnessComponent', () => {
  let component: YourFitnessComponent;
  let fixture: ComponentFixture<YourFitnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourFitnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
