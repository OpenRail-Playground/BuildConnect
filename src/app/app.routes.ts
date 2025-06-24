import {Route, Routes} from '@angular/router'
import {BaustelleListeComponent} from './baustellen-liste/baustelle-liste.component'
import {BaustelleComponent} from './baustellen-liste/baustelle/baustelle.component'
import {AboutComponent} from './about/about.component'

export const routes: Routes = [
    <Route>{path: "baustelle/:id", component: BaustelleComponent},
    <Route>{path: "baustelle", component: BaustelleListeComponent},
    <Route>{path: "about", component: AboutComponent},

    // Default redirect
    <Route>{path: '**', redirectTo: 'baustelle'},
]
