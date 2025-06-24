import {Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import {ToolbarComponent} from './toolbar/toolbar.component'
import {MapComponent} from './map/map.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BuildConnect'
}
