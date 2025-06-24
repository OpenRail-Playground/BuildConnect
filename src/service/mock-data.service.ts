import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() {
  }

  getMockData(): ConstructionDossier[] {
    return [
      <ConstructionDossier>{
        id: "DE-1234",
        name: "Strecke 0815 gespert",
        startDate: "2025-06-01T21:00:00+02:00",
        endDate: "2025-06-30T21:00:00+02:00",
        affectedSection: "Section 1-2",
        geoPosition: "46.9545892,7.0653042",
        imageUrl: "orm_basel_sbb.png",
        status: "planned",
        restrictions: [
          <CapacityRestriction>{
            id: "1",
            startDate: "2025-06-01T21:00:00+02:00",
            endDate: "2025-06-30T21:00:00+02:00",
            affectedRoute: "Route A",
            affectedPoints: ["Point 1", "Point 2"],
            startMilage: 10,
            endMilage: 12,
            type: "Total disruption",
            status: "planned",
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
      <ConstructionDossier>{
        id: "DE-0815",
        name: "Strecke 0815 gespert",
        startDate: "2025-06-01T21:00:00+02:00",
        endDate: "2025-06-30T21:00:00+02:00",
        affectedSection: "Section 1-2",
        geoPosition: "46.9545892,7.0653042",
        imageUrl: "orm_basel_sbb.png",
        status: "planned",
        restrictions: [
          <CapacityRestriction>{
            id: "1",
            startDate: "2025-06-01T21:00:00+02:00",
            endDate: "2025-06-30T21:00:00+02:00",
            affectedRoute: "Route A",
            affectedPoints: ["Point 1", "Point 2"],
            startMilage: 10,
            endMilage: 12,
            type: "Total disruption",
            status: "planned",
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
  status: string; // "planned", "confirmed", "in consultation"
  restrictions: Array<CapacityRestriction>;
}

export interface CapacityRestriction {
  id: string;
  startDate: string; // ISO 8901 '2025-06-024T21:00:00+02:00'
  endDate: string; // ISO 8901 '2025-06-024T21:00:00+02:00'
  affectedRoute: string;
  affectedPoints: Array<string>;
  startMilage?: number;
  endMilage?: number;
  type: string; // e.g. "Total disruption", "Partial disruption", "Slow speed area"
  status: string; // "planned", "confirmed", "in consultation"
  measures: Array<Measure>;
}

export interface Measure {
  id: string;
  affectedTrains: Array<string>;
  actionType: string; // e.g. "Delay", "Detour", "Cancellation"
  description: string;
}
