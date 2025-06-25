import {Component, OnInit} from '@angular/core'
import {BehaviorSubject} from 'rxjs'
import {ConstructionDossier, MockDataService} from '../../../service/mock-data.service'
import {ActivatedRoute} from '@angular/router'
import {AsyncPipe} from '@angular/common'
import {MatCard, MatCardContent, MatCardModule} from '@angular/material/card'
import {MapComponent} from '../../map/map.component'
import {RestrictionComponent} from './restriction/restriction.component'
import {FormatDateTimePipe} from '../../../service/format-date-time.pipe'

@Component({
    selector: 'app-baustelle',
    imports: [
        AsyncPipe,
        MatCard,
        MatCardContent,
        MapComponent,
        RestrictionComponent,
        MatCard,
        MatCardContent,
        MatCardModule,
        FormatDateTimePipe,
    ],
    templateUrl: './baustelle.component.html',
    styleUrl: './baustelle.component.scss'
})
export class BaustelleComponent implements OnInit {

    protected readonly constructionDossier$ = new BehaviorSubject<ConstructionDossier | null | undefined>(undefined)

    constructor(
        private readonly mockDataService: MockDataService,
        private readonly activatedRoute: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {

        this.activatedRoute.params
            .subscribe(params => {
                let id = params['id']
                let mockDataList = this.mockDataService.getMockData()
                const dataset = mockDataList.find(constructionDossier => constructionDossier.id === id)
                this.constructionDossier$.next(dataset)
            })
    }

    getGeoPosition(geoPosition?: string): { lat: number, lng: number } | undefined {

        if (!geoPosition) return undefined
        if (!this.hasGeoPosition(geoPosition)) return undefined

        const [lat, lng] = geoPosition.split(',').map(Number)
        return {lat, lng}
    }

    private hasGeoPosition(geoPosition?: string): boolean {
        return geoPosition !== undefined && geoPosition.trim() !== '' && geoPosition.includes(',')
    }
}
