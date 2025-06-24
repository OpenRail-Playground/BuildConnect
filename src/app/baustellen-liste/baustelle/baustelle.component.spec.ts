import {ComponentFixture, TestBed} from '@angular/core/testing'

import {BaustelleComponent} from './baustelle.component'

describe('BaustelleComponent', () => {
    let component: BaustelleComponent
    let fixture: ComponentFixture<BaustelleComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BaustelleComponent]
        })
            .compileComponents()

        fixture = TestBed.createComponent(BaustelleComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
