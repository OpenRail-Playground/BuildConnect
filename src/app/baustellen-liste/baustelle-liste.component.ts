import {Component, OnInit} from '@angular/core'
import {ConstructionDossier, MockDataService} from '../../service/mock-data.service'
import {BehaviorSubject} from 'rxjs'
import {
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatTable,
    MatTableModule
} from '@angular/material/table'
import {AsyncPipe} from '@angular/common'
import {ActivatedRoute, Router} from '@angular/router'
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from '@angular/material/card'

@Component({
    selector: 'app-baustellen-liste',
    templateUrl: './baustelle-liste.component.html',
    styleUrl: './baustelle-liste.component.scss',
    imports: [
        MatTable,
        MatHeaderCellDef,
        MatCellDef,
        MatHeaderRowDef,
        MatRowDef,
        AsyncPipe,
        MatTableModule,
        MatCardHeader,
        MatCard,
        MatCardContent,
        MatCardModule,
    ],
})
export class BaustelleListeComponent implements OnInit {

    protected readonly mockDataList$ = new BehaviorSubject<ConstructionDossier[]>([])

    protected readonly displayedColumns = [
        "id",
        "name",
    ]

    constructor(
        private readonly mockDataService: MockDataService,
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        let mockData = this.mockDataService.getMockData()
        this.mockDataList$.next(mockData)
    }

    async onClickRow(constructionDossier: ConstructionDossier): Promise<void> {

        if (constructionDossier == null) return

        const path = "./" + constructionDossier.id
        await this.router.navigate([path], {relativeTo: this.activatedRoute})
    }
}
