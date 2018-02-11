import { FlightPlansService } from './flight-plans.service';

describe('FlightPlansService', () => {
  let flightPlansService: FlightPlansService;

  beforeEach(() => {
    flightPlansService = new FlightPlansService();
  });

  it('should emit added flight plan', () => {
    flightPlansService.flightPlans.subscribe(flightPlans => {
      expect(flightPlans.length).toEqual(1);
    });

    flightPlansService.addEmptyFlightPlan();
  });

  it('should emit flight plan with correct title and id', () => {
    flightPlansService.flightPlans.subscribe(flightPlans => {
      expect(flightPlans[ 0 ].name).toEqual('Flight Plan 1');
      expect(flightPlans[ 0 ].id).toEqual(1);
    });

    flightPlansService.addEmptyFlightPlan();
  });

  it('should emit selected flight plan', () => {
    const expectedActiveFlightPlanId: number = 3;

    flightPlansService.addEmptyFlightPlan();
    flightPlansService.addEmptyFlightPlan();
    flightPlansService.addEmptyFlightPlan();

    flightPlansService.activeFlightPlan.subscribe(flightPlan => {
      expect(flightPlan.id).toEqual(expectedActiveFlightPlanId);
    });

    flightPlansService.setActiveFlightPlan(expectedActiveFlightPlanId);
  });
});
