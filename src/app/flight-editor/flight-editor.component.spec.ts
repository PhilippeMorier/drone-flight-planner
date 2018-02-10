import { AgmCoreModule } from '@agm/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightEditorComponent } from './flight-editor.component';

describe('FlightEditorComponent', () => {
  let component: FlightEditorComponent;
  let fixture: ComponentFixture<FlightEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FlightEditorComponent,
      ],
      imports: [
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyCundKc3R8Yl8noBVA2FvZjPqRCyhvRTjw',
        }),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should NOT render map with no FlightPlan set', () => {
    expect(fixture.nativeElement.querySelectorAll('agm-map').length)
      .toEqual(0);
  });

  it('should render map when FlightPlan is set', () => {
    component.flightPlan = {
      coordinates: [],
      createdOn: new Date(),
      id: 1,
      name: 'First Test Plan',
    };
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('agm-map').length)
      .toEqual(1);
  });
});
