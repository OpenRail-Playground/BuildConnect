import {Component, OnInit} from '@angular/core'
import {BehaviorSubject} from 'rxjs'
import {ConstructionDossier, MockDataService} from '../../../service/mock-data.service'
import {ActivatedRoute} from '@angular/router'
import {AsyncPipe, NgIf, NgOptimizedImage} from '@angular/common'
import {MatCard, MatCardContent} from '@angular/material/card'
import {MapComponent} from "../../map/map.component"

@Component({
    selector: 'app-baustelle',
    imports: [
        AsyncPipe,
        MatCard,
        MatCardContent,
        NgOptimizedImage,
        MapComponent,
        NgIf
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

    hasGeoPosition(geoPosition: string | undefined): boolean {
        return geoPosition !== undefined && geoPosition.trim() !== '' && geoPosition.includes(',')
    }

    getGeoPosition(geoPosition: string): { lat: number, lng: number } {
        const [lat, lng] = geoPosition.split(',').map(Number)
        return {lat, lng}
    }
}
