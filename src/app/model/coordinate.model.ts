import { LatLngLiteral } from '@agm/core';

export class Coordinate {
  public latitude: number;
  public longitude: number;

  public constructor(coordinate: LatLngLiteral) {
    this.latitude = coordinate.lat;
    this.longitude = coordinate.lng;
  }
}
