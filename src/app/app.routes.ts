import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Coming } from './pages/coming/coming';
import { Genre } from './pages/genre/genre';
import { Movie } from './pages/movie/movie';
import { Person } from './pages/person/person';
import { Playing } from './pages/playing/playing';
import { Recs } from './pages/recs/recs';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'playing', component: Playing},
  {path: 'coming', component: Coming},
  {path: 'movie/:id', component: Movie},
  {path: 'person/:id', component: Person},
  {path: 'genre/:id', component: Genre},
  {path: 'recs/:id', component: Recs}
];
