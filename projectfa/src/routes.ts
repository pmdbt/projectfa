import { Routes } from '@angular/router';
import { MapComponent } from './app/components/map/map.component';
import { HomeComponent } from './app/components/home/home.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'activity/:id', component: MapComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];
