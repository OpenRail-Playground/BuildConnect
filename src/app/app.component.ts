import {Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import {BaustellenListeComponent} from './baustellen-liste/baustellen-liste.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BaustellenListeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BuildConnect'
}
