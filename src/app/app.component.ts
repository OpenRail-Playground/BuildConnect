import {Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import {ToolbarComponent} from './toolbar/toolbar.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BuildConnect'
}
