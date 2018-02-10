import { MouseEvent } from '@agm/core';
import { Component, Input } from '@angular/core';

import { Coordinate } from '../model/coordinate.model';
import { FlightPlan } from '../model/flight-plan.model';

@Component({
  selector: 'dfp-flight-editor',
  styleUrls: [ './flight-editor.component.scss' ],
  templateUrl: './flight-editor.component.html',
})
export class FlightEditorComponent {
  @Input()
  public flightPlan: FlightPlan;

  public addPoint($event: MouseEvent): void {
    this.flightPlan.coordinates.push(new Coordinate($event.coords));
  }
}
