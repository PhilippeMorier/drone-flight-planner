import { Coordinate } from './coordinate.model';

export class FlightPlan {
  public id: number;
  public coordinates: Coordinate[];
  public name: string;
}
