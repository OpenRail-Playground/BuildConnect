import {Component, Input} from '@angular/core'
import {CapacityRestriction} from '../../../../service/mock-data.service'
import {MeasureComponent} from './measure/measure.component'

@Component({
    selector: 'app-restriction',
    imports: [
        MeasureComponent
    ],
    templateUrl: './restriction.component.html',
    styleUrl: './restriction.component.scss'
})
export class RestrictionComponent {

    @Input({required: true})
    capacityRestrictions: CapacityRestriction[] | null | undefined = undefined

}
