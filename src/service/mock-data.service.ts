import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() {
  }

  getMockData(): MockData[] {
    return [
      <MockData>{
        id: 128,
        name: 'Baustelle Basel SBB',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        imageUrl: 'orm_basel_sbb.png'
      },
      <MockData>{
        id: 218,
        name: 'Baustelle Bregenz',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        imageUrl: 'orm_bregenz.png'
      },
      <MockData>{
        id: 378,
        name: 'Baustelle Passau Hbf',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        imageUrl: 'orm_passau_hbf.png'
      }
    ]
  }

  getMockData2(): ConstructionDossier[] {
    return [
      <ConstructionDossier>{
        id: "DE-1234",
        name: "Strecke 0815 gespert",
        startDate: "2025-06-01T21:00:00+02:00",
        endDate: "2025-06-30T21:00:00+02:00",
        affectedSection: "Section 1-2",
        geoPosition: "46.9545892,7.0653042",
        imageUrl: "",
        restrictions: [
          <CapacityRestriction>{
            id: "1",
            startDate: "2025-06-01T21:00:00+02:00",
            endDate: "2025-06-30T21:00:00+02:00",
            affectedRoute: "Route A",
            affectedPoints: ["Point 1", "Point 2"],
            trackKilometers: "10 km",
            type: "Total disruption",
            measures: [
              <Measure>{
                id: "1",
                affectedTrains: ["Train 101", "Train 102"],
                actionType: "Delay",
                description: "Expected delay of 30 minutes"
              },
              <Measure>{
                id: "2",
                affectedTrains: ["Train 103"],
                actionType: "Detour",
                description: "Detour via Route B"
              }
            ]
          }
        ],
      },
    ]
  }
}

export interface ConstructionDossier {
  id: string;
  name: string;
  startDate: string; // ISO 8901 '2025-06-024T21:00:00+02:00'
  endDate: string; // ISO 8901 '2025-06-024T21:00:00+02:00'
  affectedSection: string;
  geoPosition?: string; // GPS Koordinate 46.9545892,7.0653042
  imageUrl?: string;
  restrictions: Array<CapacityRestriction>;
}

export interface CapacityRestriction {
  id: string;
  startDate: string; // ISO 8901 '2025-06-024T21:00:00+02:00'
  endDate: string; // ISO 8901 '2025-06-024T21:00:00+02:00'
  affectedRoute: string;
  affectedPoints: Array<string>;
  trackKilometers: string;
  type: string;  // e.g. "Total disruption", "Partial disruption", "Slow speed area"
  measures: Array<Measure>;
}

export interface Measure {
  id: string;
  affectedTrains: Array<string>;
  actionType: string; // e.g. "Delay", "Detour", "Cancellation"
  description: string;
}

export interface MockData {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}
