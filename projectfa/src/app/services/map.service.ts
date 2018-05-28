import { Injectable } from '@angular/core';
import { IActivity } from '../shared/activity.model';
import { environment } from '../../environments/environment';

import { GeoJson } from '../components/map/map';
import * as mapboxgl from 'mapbox-gl';
import 'rxjs/add/operator/map';

@Injectable()
export class MapService {

  constructor() {   mapboxgl.accessToken = environment.mapbox.accessToken;
  }
}
