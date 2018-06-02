import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { MapService } from './services/map.service';
// import { ActivityService } from './services/activity.service';
import { HomeComponent } from './components/home/home.component';
import { appRoutes } from '../routes';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    // LeafletModule.forRoot(),
    HttpClientModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
