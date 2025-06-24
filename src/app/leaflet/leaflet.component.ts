import { Component } from '@angular/core';
import { LeafletDirective } from '@bluehalo/ngx-leaflet';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-leaflet',
  standalone: true,
  templateUrl: './leaflet.component.html',
  imports: [LeafletDirective],
  styleUrl: './leaflet.component.scss'
})
export class LeafletComponent {
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&amp;copy; OpenStreetMap contributors'
      }),
      tileLayer('https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png')
    ],
    zoom: 13,
    center: latLng(48.20817430, 16.37381890)
  };

}

