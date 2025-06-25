import {Component, Input} from '@angular/core'
import {CapacityRestriction} from '../../../../service/mock-data.service'
import {MeasureComponent} from './measure/measure.component'
import {FormatDateTimePipe} from "../../../../service/format-date-time.pipe"

@Component({
    selector: 'app-restriction',
    imports: [
        MeasureComponent,
        FormatDateTimePipe
    ],
    templateUrl: './restriction.component.html',
    styleUrl: './restriction.component.scss'
})
export class RestrictionComponent {

    @Input({required: true})
    capacityRestrictions: CapacityRestriction[] | null | undefined = undefined

}
