import {Component, OnInit} from '@angular/core'
import {MockData, MockDataService} from '../../service/mock-data.service'
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
  ],
})
export class BaustelleListeComponent implements OnInit {

  protected readonly mockDataList$ = new BehaviorSubject<MockData[]>([])

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

  async onClickRow(mockData: MockData): Promise<void> {

    if (mockData == null) return

    const path = "./" + mockData.id
    await this.router.navigate([path], {relativeTo: this.activatedRoute})
  }
}
