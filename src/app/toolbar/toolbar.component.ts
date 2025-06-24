import {Component} from '@angular/core'
import {RouterLink} from '@angular/router'
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar'

@Component({
    selector: 'app-toolbar',
    imports: [
        RouterLink,
        MatToolbar,
        MatToolbarModule,
    ],
    templateUrl: './toolbar.component.html',
    styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

}
