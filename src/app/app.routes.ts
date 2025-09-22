import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Coming } from './pages/coming/coming';
import { Playing } from './pages/playing/playing';
import { Genre } from './pages/genre/genre';
import { Movie } from './pages/movie/movie';
import { Person } from './pages/person/person';
import { Recs } from './pages/recs/recs';
import { Genres } from './pages/genres/genres';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'playing', component: Playing},
  {path: 'coming', component: Coming},
  {path: 'movie/:id', component: Movie},
  {path: 'person/:id', component: Person},
  {path: 'genre/:id', component: Genre},
  {path: 'genre', component: Genres},
  {path: 'recs/:id', component: Recs}
];
