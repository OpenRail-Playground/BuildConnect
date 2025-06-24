import {ComponentFixture, TestBed} from '@angular/core/testing'

import {BaustellenListeComponent} from './baustellen-liste.component'

describe('BaustellenListeComponent', () => {
  let component: BaustellenListeComponent
  let fixture: ComponentFixture<BaustellenListeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaustellenListeComponent]
    })
      .compileComponents()

    fixture = TestBed.createComponent(BaustellenListeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
