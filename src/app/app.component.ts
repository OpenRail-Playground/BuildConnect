import {Component} from '@angular/core'
import {BaustellenListeComponent} from './baustellen-liste/baustellen-liste.component'
import {RouterOutlet} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [BaustellenListeComponent, RouterOutlet]
})
export class AppComponent {
  title = 'BuildConnect'
}
