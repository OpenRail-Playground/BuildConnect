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

@Component({
  selector: 'app-baustellen-liste',
  templateUrl: './baustellen-liste.component.html',
  styleUrl: './baustellen-liste.component.scss',
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
export class BaustellenListeComponent implements OnInit {

  protected readonly mockData$ = new BehaviorSubject<MockData[]>([])

  protected readonly displayedColumns = [
    "id_column",
    "name",
  ]

  constructor(
    private readonly mockDataService: MockDataService,
  ) {
  }

  ngOnInit(): void {
    let mockData = this.mockDataService.getMockData()
    this.mockData$.next(mockData)
  }
}
