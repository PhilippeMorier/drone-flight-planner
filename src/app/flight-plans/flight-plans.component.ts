import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FlightPlan } from '../model/flight-plan.model';

@Component({
  selector: 'dfp-flight-plans',
  styleUrls: [ './flight-plans.component.scss' ],
  templateUrl: './flight-plans.component.html',
})
export class FlightPlansComponent {
  @Input()
  public flightPlans: FlightPlan[];

  @Input()
  public activeFlightPlan: FlightPlan;

  @Output()
  public selectedFlightPlan: EventEmitter<FlightPlan> = new EventEmitter<FlightPlan>();

  public emitFlightPlanSelected(flightPlan: FlightPlan): void {
    this.selectedFlightPlan.emit(flightPlan);
  }
}
