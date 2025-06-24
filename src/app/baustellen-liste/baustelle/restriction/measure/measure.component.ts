import {Component, Input} from '@angular/core'
import {Measure} from '../../../../../service/mock-data.service'

@Component({
    selector: 'app-measure',
    imports: [],
    templateUrl: './measure.component.html',
    styleUrl: './measure.component.scss'
})
export class MeasureComponent {

    @Input({required: true})
    measures: Measure[] | null | undefined = undefined

}
