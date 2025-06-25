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
                id: "AT-218",
                name: "Strecke Schwarzach-St. Veit - Mallnitz-Obervellach gesperrt",
                startDate: "2024-11-18T21:00:00+02:00",
                endDate: "2025-07-13T21:00:00+02:00",
                affectedSection: "22201",
                geoPosition: "46.996801, 13.168222",
                status: "undergoing",
                restrictions: [
                    <CapacityRestriction>{
                        id: "R1",
                        startDate: "2024-11-18T21:00:00+02:00",
                        endDate: "2025-07-13T21:00:00+02:00",
                        affectedRoute: "22201",
                        affectedPoints: ["Schwarzach-St. Veit", "Mallnitz-Obervellach"],
                        startMilage: 66.546,
                        endMilage: 45.932,
                        type: "Partial disruption",
                        status: "undergoing",
                        measures: [
                            <Measure>{
                                id: "M1",
                                affectedTrains: ["EC110", "IC111", "IC113"],
                                actionType: "Detour",
                                description: "Expected delay of 45 minutes"
                            },
                            <Measure>{
                                id: "M2",
                                affectedTrains: ["Train RJ 101"],
                                actionType: "Detour",
                                description: "Detour via Linz"
                            },
                            <Measure>{
                                id: "M3",
                                affectedTrains: ["Train RE 1501"],
                                actionType: "Cancellation",
                                description: "Train cancelled due to construction"
                            }]
                    },
                ]
            },
            <ConstructionDossier>{
                id: "AT-001",
                name: "Strecke Wien - Salzburg gesperrt",
                startDate: "2025-06-01T21:00:00+02:00",
                endDate: "2025-06-15T21:00:00+02:00",
                affectedSection: "Section Wien - Salzburg",
                geoPosition: "48.2082,16.3738",
                status: "planned",
                restrictions: [<CapacityRestriction>{
                    id: "R1",
                    startDate: "2025-06-01T21:00:00+02:00",
                    endDate: "2025-06-07T21:00:00+02:00",
                    affectedRoute: "Route Wien - Salzburg",
                    affectedPoints: ["Wien Hauptbahnhof", "Salzburg Hauptbahnhof"],
                    startMilage: 0,
                    endMilage: 300,
                    type: "Total disruption",
                    status: "planned",
                    measures: [<Measure>{
                        id: "M1",
                        affectedTrains: ["Train IC 502", "Train IC 507"],
                        actionType: "Delay",
                        description: "Expected delay of 45 minutes"
                    }, <Measure>{
                        id: "M2",
                        affectedTrains: ["Train RJ 101"],
                        actionType: "Detour",
                        description: "Detour via Linz"
                    }, <Measure>{
                        id: "M3",
                        affectedTrains: ["Train RE 1501"],
                        actionType: "Cancellation",
                        description: "Train cancelled due to construction"
                    }]
                }, <CapacityRestriction>{
                    id: "R2",
                    startDate: "2025-06-10T21:00:00+02:00",
                    endDate: "2025-06-15T21:00:00+02:00",
                    affectedRoute: "Route Salzburg - Innsbruck",
                    affectedPoints: ["Salzburg Hauptbahnhof", "Innsbruck Hauptbahnhof"],
                    startMilage: 300,
                    endMilage: 400,
                    type: "Partial disruption",
                    status: "planned",
                    measures: [<Measure>{
                        id: "M4",
                        affectedTrains: ["Train IC 504"],
                        actionType: "Delay",
                        description: "Expected delay of 20 minutes"
                    }, <Measure>{
                        id: "M5",
                        affectedTrains: ["Train RJ 103", "Train RE 1503"],
                        actionType: "Detour",
                        description: "Detour via Route C"
                    }]
                }]
            },
            <ConstructionDossier>{
                id: "DE-001",
                name: "Strecke Berlin - München gesperrt",
                startDate: "2025-06-16T21:00:00+02:00",
                endDate: "2025-06-30T21:00:00+02:00",
                affectedSection: "Section Berlin - München",
                geoPosition: "52.5200,13.4050",
                status: "planned",
                restrictions: [<CapacityRestriction>{
                    id: "R1",
                    startDate: "2025-06-16T21:00:00+02:00",
                    endDate: "2025-06-22T21:00:00+02:00",
                    affectedRoute: "Route Berlin - München",
                    affectedPoints: ["Berlin Hauptbahnhof", "München Hauptbahnhof"],
                    startMilage: 0,
                    endMilage: 600,
                    type: "Total disruption",
                    status: "planned",
                    measures: [<Measure>{
                        id: "M1",
                        affectedTrains: ["Train IC 201", "Train IC 202"],
                        actionType: "Delay",
                        description: "Expected delay of 60 minutes"
                    }, <Measure>{
                        id: "M2",
                        affectedTrains: ["Train RE 1234"],
                        actionType: "Cancellation",
                        description: "Train cancelled due to construction"
                    }]
                }, <CapacityRestriction>{
                    id: "R2",
                    startDate: "2025-06-25T21:00:00+02:00",
                    endDate: "2025-06-30T21:00:00+02:00",
                    affectedRoute: "Route München - Stuttgart",
                    affectedPoints: ["München Hauptbahnhof", "Stuttgart Hauptbahnhof"],
                    startMilage: 600,
                    endMilage: 800,
                    type: "Partial disruption",
                    status: "planned",
                    measures: [<Measure>{
                        id: "M3",
                        affectedTrains: ["Train IC 203"],
                        actionType: "Detour",
                        description: "Detour via Augsburg"
                    }, <Measure>{
                        id: "M4",
                        affectedTrains: ["Train RE 3456"],
                        actionType: "Delay",
                        description: "Expected delay of 30 minutes"
                    }]
                }]
            }, <ConstructionDossier>{
                id: "CH-001",
                name: "Strecke Zürich - Genf gesperrt",
                startDate: "2025-07-01T21:00:00+02:00",
                endDate: "2025-07-15T21:00:00+02:00",
                affectedSection: "Section Zürich - Genf",
                geoPosition: "47.3769,8.5417",
                status: "planned",
                restrictions: [<CapacityRestriction>{
                    id: "R1",
                    startDate: "2025-07-01T21:00:00+02:00",
                    endDate: "2025-07-05T21:00:00+02:00",
                    affectedRoute: "Route Zürich - Genf",
                    affectedPoints: ["Zürich Hauptbahnhof", "Genf Hauptbahnhof"],
                    startMilage: 0,
                    endMilage: 250,
                    type: "Total disruption",
                    status: "planned",
                    measures: [<Measure>{
                        id: "M1",
                        affectedTrains: ["Train ICN 700", "Train ICN 701"],
                        actionType: "Delay",
                        description: "Expected delay of 50 minutes"
                    }, <Measure>{
                        id: "M2",
                        affectedTrains: ["Train RE 420"],
                        actionType: "Detour",
                        description: "Detour via Lausanne"
                    }, <Measure>{
                        id: "M3",
                        affectedTrains: ["Train IC 800"],
                        actionType: "Cancellation",
                        description: "Train cancelled due to construction"
                    }]
                }, <CapacityRestriction>{
                    id: "R2",
                    startDate: "2025-07-06T21:00:00+02:00",
                    endDate: "2025-07-15T21:00:00+02:00",
                    affectedRoute: "Route Genf - Lausanne",
                    affectedPoints: ["Genf Hauptbahnhof", "Lausanne Hauptbahnhof"],
                    startMilage: 250,
                    endMilage: 300,
                    type: "Partial disruption",
                    status: "planned",
                    measures: [<Measure>{
                        id: "M4",
                        affectedTrains: ["Train ICN 702"],
                        actionType: "Delay",
                        description: "Expected delay of 25 minutes"
                    }, <Measure>{
                        id: "M5",
                        affectedTrains: ["Train RE 421"],
                        actionType: "Detour",
                        description: "Detour via Route D"
                    }]
                }]
            }, <ConstructionDossier>{
                id: "DE-002",
                name: "Strecke Hamburg - Frankfurt gesperrt",
                startDate: "2025-07-16T21:00:00+02:00",
                endDate: "2025-07-30T21:00:00+02:00",
                affectedSection: "Section Hamburg - Frankfurt",
                geoPosition: "53.5511,9.9937",
                status: "planned",
                restrictions: [<CapacityRestriction>{
                    id: "R1",
                    startDate: "2025-07-16T21:00:00+02:00",
                    endDate: "2025-07-20T21:00:00+02:00",
                    affectedRoute: "Route Hamburg - Frankfurt",
                    affectedPoints: ["Hamburg Hauptbahnhof", "Frankfurt Hauptbahnhof"],
                    startMilage: 0,
                    endMilage: 400,
                    type: "Total disruption",
                    status: "planned",
                    measures: [<Measure>{
                        id: "M1",
                        affectedTrains: ["Train IC 2001", "Train IC 2002"],
                        actionType: "Delay",
                        description: "Expected delay of 30 minutes"
                    }, <Measure>{
                        id: "M2",
                        affectedTrains: ["Train RE 123"],
                        actionType: "Cancellation",
                        description: "Train cancelled due to construction"
                    }]
                }, <CapacityRestriction>{
                    id: "R2",
                    startDate: "2025-07-21T21:00:00+02:00",
                    endDate: "2025-07-30T21:00:00+02:00",
                    affectedRoute: "Route Frankfurt - Mannheim",
                    affectedPoints: ["Frankfurt Hauptbahnhof", "Mannheim Hauptbahnhof"],
                    startMilage: 400,
                    endMilage: 450,
                    type: "Partial disruption",
                    status: "planned",
                    measures: [<Measure>{
                        id: "M3",
                        affectedTrains: ["Train IC 2003"],
                        actionType: "Detour",
                        description: "Detour via Route E"
                    }, <Measure>{
                        id: "M4",
                        affectedTrains: ["Train RE 234"],
                        actionType: "Delay",
                        description: "Expected delay of 20 minutes"
                    }]
                }]
            }, <ConstructionDossier>{
                id: "CH-002",
                name: "Strecke Bern - Basel gesperrt",
                startDate: "2025-08-01T21:00:00+02:00",
                endDate: "2025-08-15T21:00:00+02:00",
                affectedSection: "Section Bern - Basel",
                geoPosition: "46.9480,7.4474",
                status: "planned",
                restrictions: [<CapacityRestriction>{
                    id: "R1",
                    startDate: "2025-08-01T21:00:00+02:00",
                    endDate: "2025-08-05T21:00:00+02:00",
                    affectedRoute: "Route Bern - Basel",
                    affectedPoints: ["Bern Hauptbahnhof", "Basel SBB"],
                    startMilage: 0,
                    endMilage: 100,
                    type: "Total disruption",
                    status: "planned",
                    measures: [<Measure>{
                        id: "M1",
                        affectedTrains: ["Train ICN 800", "Train ICN 801"],
                        actionType: "Delay",
                        description: "Expected delay of 40 minutes"
                    }, <Measure>{
                        id: "M2",
                        affectedTrains: ["Train RE 500"],
                        actionType: "Detour",
                        description: "Detour via Route F"
                    }, <Measure>{
                        id: "M3",
                        affectedTrains: ["Train IC 900"],
                        actionType: "Cancellation",
                        description: "Train cancelled due to construction"
                    }]
                }, <CapacityRestriction>{
                    id: "R2",
                    startDate: "2025-08-06T21:00:00+02:00",
                    endDate: "2025-08-15T21:00:00+02:00",
                    affectedRoute: "Route Basel - Zürich",
                    affectedPoints: ["Basel SBB", "Zürich Hauptbahnhof"],
                    startMilage: 100,
                    endMilage: 150,
                    type: "Partial disruption",
                    status: "planned",
                    measures: [<Measure>{
                        id: "M4",
                        affectedTrains: ["Train ICN 802"],
                        actionType: "Delay",
                        description: "Expected delay of 30 minutes"
                    }, <Measure>{
                        id: "M5",
                        affectedTrains: ["Train RE 501"],
                        actionType: "Detour",
                        description: "Detour via Route G"
                    }]
                }]
            }
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
