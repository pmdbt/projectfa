import { Injectable } from '@angular/core';
import { IActivity } from '../shared/activity.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { GeoJson } from '../components/map/map';
import * as mapboxgl from 'mapbox-gl';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class MapService {
  constructor(private http: HttpClient) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }
  mapData;
  loadDummyData() {
    return this.http.get('../../../assets/chicago-parks.geojson')
      .pipe(map(response => this.mapData = response));
  }
}

