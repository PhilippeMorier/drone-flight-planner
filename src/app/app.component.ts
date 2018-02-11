import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FlightPlan } from './model/flight-plan.model';
import { FlightPlansService } from './service/flight-plans.service';

@Component({
  selector: 'dfp-root',
  styleUrls: [ './app.component.scss' ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public activeFlightPlan: Observable<FlightPlan>;
  public flightPlans: Observable<FlightPlan[]>;

  public constructor(private readonly flightPlansService: FlightPlansService) {
  }

  public ngOnInit(): void {
    this.activeFlightPlan = this.flightPlansService.activeFlightPlan;
    this.flightPlans = this.flightPlansService.flightPlans;
  }

  public setActiveFlightPlan(flightPlan: FlightPlan): void {
    this.flightPlansService.setActiveFlightPlan(flightPlan.id);
  }

  public addFlightPlan(): void {
    this.flightPlansService.addEmptyFlightPlan();
  }
}
