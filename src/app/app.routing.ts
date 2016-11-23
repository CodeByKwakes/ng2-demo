import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'}
]

export const appRoutingProviders: any[] = []

export const routing = RouterModule.forRoot(appRoutes)