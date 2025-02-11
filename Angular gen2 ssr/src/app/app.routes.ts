import { Routes } from '@angular/router';
import { BuilderPage } from './components/builder-page.component';

export const routes: Routes = [
  // Add any static routes first
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BuilderPage },

  // Wildcard route to catch all other paths and let Builder.io handle them
  { path: '**', component: BuilderPage }
];
