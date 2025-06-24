import {Component, Input, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {Icon, icon} from 'leaflet';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    @Input() latitude!: number;  // Standardwert
    @Input() longitude!: number;  // Standardwert

    constructor() {
    }

    ngOnInit(): void {
        // Initialisiere die Karte mit dynamischen Koordinaten
        const map = L.map('map').setView([this.latitude, this.longitude], 13);

        // Füge eine OpenStreetMap-Kachel-Ebene hinzu
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

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
