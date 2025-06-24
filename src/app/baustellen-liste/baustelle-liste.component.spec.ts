import {ComponentFixture, TestBed} from '@angular/core/testing'

import {BaustelleListeComponent} from './baustelle-liste.component'

describe('BaustellenListeComponent', () => {
    let component: BaustelleListeComponent
    let fixture: ComponentFixture<BaustelleListeComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BaustelleListeComponent]
        })
            .compileComponents()

        fixture = TestBed.createComponent(BaustelleListeComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
