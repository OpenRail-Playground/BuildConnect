import {Route, Routes} from '@angular/router'
import {BaustelleListeComponent} from './baustellen-liste/baustelle-liste.component'
import {BaustelleComponent} from './baustellen-liste/baustelle/baustelle.component'

export const routes: Routes = [
  <Route>{path: "baustelle/:id", component: BaustelleComponent},
  <Route>{path: "baustelle", component: BaustelleListeComponent},

  // Default redirect
  <Route>{path: '**', redirectTo: 'baustelle'},
]
