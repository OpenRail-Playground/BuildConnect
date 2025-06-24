import {Component, OnInit} from '@angular/core'
import {BehaviorSubject} from 'rxjs'
import {MockData, MockDataService} from '../../../service/mock-data.service'
import {ActivatedRoute} from '@angular/router'
import {AsyncPipe, NgOptimizedImage} from '@angular/common'
import {MatCard, MatCardContent} from '@angular/material/card'

@Component({
  selector: 'app-baustelle',
  imports: [
    AsyncPipe,
    MatCard,
    MatCardContent,
    NgOptimizedImage
  ],
  templateUrl: './baustelle.component.html',
  styleUrl: './baustelle.component.scss'
})
export class BaustelleComponent implements OnInit {

  protected readonly mockData$ = new BehaviorSubject<MockData | null | undefined>(undefined)

  constructor(
    private readonly mockDataService: MockDataService,
    private readonly activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {

    this.activatedRoute.params
      .subscribe(params => {
        let id = Number(params['id'])
        let mockDataList = this.mockDataService.getMockData()
        const dataset = mockDataList.find(mockData => mockData.id === id)
        this.mockData$.next(dataset)
      })
  }
}
