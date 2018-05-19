import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import 'rxjs/add/operator/map';

@Injectable()
export class MapService {
  constructor() { }

  getMap() {
    console.log(mapboxgl);
    // const mapGL = MapGL;
    mapboxgl.accessToken = 'pk.eyJ1IjoicHJvcGVydHlzYWdlIiwiYSI6ImNqZ3BzOGJ3bTBhbHQycXE4dmlsY2Z0dWoifQ.jk7JZXKZfh6vORhT2i77JQ';
    const map = new mapboxgl.Map({
      container: 'mapId',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-118.2437, 34.0522],
      zoom: 9
    });
    console.log(map);
  }
}
