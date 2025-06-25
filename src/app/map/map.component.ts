import { Component, Input, OnInit } from '@angular/core'
import * as L from 'leaflet'
import { Icon, icon } from 'leaflet'

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    @Input() latitude!: number  // Standardwert
    @Input() longitude!: number  // Standardwert

    constructor() {
    }

    ngOnInit(): void {
        var zoomLevel = 10;
        // Initialisiere die Karte mit dynamischen Koordinaten
        const map = L.map('map').setView([this.latitude, this.longitude], zoomLevel)

        // Füge eine OpenStreetMap-Kachel-Ebene hinzu

        //L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        var API_KEY = "499fbbcf-2dd9-4197-b580-882521a0c74f";
        https://api.stadiamaps.com/tz/lookup/v1?lat=59.43696&lng=24.75357&api_key=YOUR-API-KEY
        L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png?api_key='+API_KEY, {
            attribution: 'Data <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors</a>, Style: <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA 2.0</a> <a href="http://www.openrailwaymap.org/">OpenRailwayMap</a>'
        }).addTo(map)
        L.tileLayer('https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap'
        }).addTo(map)

        // Füge einen Marker an den dynamischen Koordinaten hinzu
        L.marker([this.latitude, this.longitude], {
            icon: icon({
                ...Icon.Default.prototype.options,
                iconUrl: 'assets/marker-icon.png',
                iconRetinaUrl: 'assets/marker-icon-2x.png',
                shadowUrl: 'assets/marker-shadow.png'
            })
        }).addTo(map)
        //.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        //.openPopup();
    }
}
