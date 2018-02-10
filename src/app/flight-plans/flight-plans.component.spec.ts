import { AgmCoreModule } from '@agm/core';
import { MdlModule } from '@angular-mdl/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightPlan } from '../model/flight-plan.model';
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
        MdlModule,
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
    const testFlightPlans: FlightPlan[] = [{
      coordinates: [],
      id: 1,
      name: 'First Test Plan',
    }, {
      coordinates: [],
      id: 2,
      name: 'Second Test Plan',
    }];

    component.flightPlans = testFlightPlans;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('mdl-list-item').length)
      .toEqual(testFlightPlans.length);
  });
});
