import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

import { Subject } from 'rxjs/Subject';
import { FlightPlan } from '../model/flight-plan.model';

export class FlightPlansService {
  public flightPlans: Observable<FlightPlan[]>;
  public activeFlightPlan: Observable<FlightPlan>;

  private flightPlansSubject: Subject<FlightPlan[]>;
  private activeFlightPlanSubject: Subject<FlightPlan>;

  private flightPlanList: FlightPlan[] = [];
  private lastFlightPlanId: number = 0;

  public constructor() {
    this.flightPlansSubject = new Subject<FlightPlan[]>();
    this.flightPlans = this.flightPlansSubject.asObservable();
    this.activeFlightPlanSubject = new Subject<FlightPlan>();
    this.activeFlightPlan = this.activeFlightPlanSubject.asObservable();
  }

  public setActiveFlightPlan(flightPlan: FlightPlan): void {
    const activeFlightPlan = this.flightPlanList.find(
      p => p.id === flightPlan.id,
    );
    this.activeFlightPlanSubject.next(activeFlightPlan);
  }

  public addEmptyFlightPlan(): void {
    const emptyFlightPlan = {
      coordinates: [],
      createdOn: new Date(),
      id: this.lastFlightPlanId++,
      name: this.lastFlightPlanId + '. Flight Plan',
    };
    this.flightPlanList.push(emptyFlightPlan);

    this.flightPlansSubject.next(this.flightPlanList);
    this.activeFlightPlanSubject.next(emptyFlightPlan);
  }
}
