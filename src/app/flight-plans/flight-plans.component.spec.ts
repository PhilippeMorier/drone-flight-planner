import { AgmCoreModule } from '@agm/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightPlansComponent } from './flight-plans.component';

describe('FlightPlansComponent', () => {
  let component: FlightPlansComponent;
  let fixture: ComponentFixture<FlightPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightPlansComponent ],
      imports: [
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyCundKc3R8Yl8noBVA2FvZjPqRCyhvRTjw',
        }),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all plans in a list', () => {
    component.flightPlans = [{
      coordinates: [],
      createdOn: new Date(),
      id: 1,
      name: 'First Test Plan',
    }, {
      coordinates: [],
      createdOn: new Date(),
      id: 2,
      name: 'Second Test Plan',
    }];
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('li').length)
      .toEqual(component.flightPlans.length);
  });
});
