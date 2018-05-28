import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MapService } from '../../services/map.service';
import { IActivity } from '../../shared/activity.model';
// import { ActivityService } from '../../services/activity.service';
import { ActivatedRoute } from '@angular/router';
import * as mapboxgl from 'mapbox-gl';
import { GeoJson, FeatureCollection } from './map';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  /// default settings
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/light-v9';
  lat = 34.0522;
  lng = -118.2437;
  markers = {
    'type': 'FeatureCollection',
    'features': [{
      'type': 'Feature',
      'properties': {},
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -118.2437,
          34.0522
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {},
      'geometry': {
        'coordinates': [
          -87.637596,
          41.940403
        ],
        'type': 'Point'
      }
    }
  ]
  };
  message = 'Hello World!';
  source: any;
  activities;
  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.initializeMap();
  }
  ngAfterViewInit() {
    // this.loadLocations();
  }

  initializeMap() {
    /// locate the user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.map.flyTo({
          center: [this.lng, this.lat]
        });
      });
    }
    this.buildMap();
  }
  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 3,
      center: [this.lng, this.lat]
    });
    /// Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
    this.loadLocations();
    console.log('ths.map in buildMap', this.map);
  }
  loadLocations() {
    console.log('this.map in loadLocations', this.map);
    console.log('this.markers', this.markers);
    this.markers.features.forEach(function (marker) {
    console.log('marker in forEach', marker);
  //     // create a HTML element for each feature
      const el = document.createElement('div');
      el.className = 'marker';
  //     // make a marker for each feature and add to the map
      // let map = new mapboxgl.Marker(el)
      //   .setLngLat(marker.geometry.coordinates)
      //   .addTo(this.map);
    });
  }
}

