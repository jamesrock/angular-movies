import { Component } from '@angular/core';
import { FilmGrid } from '../../componnts/film-grid/film-grid';

@Component({
  selector: 'playing',
  imports: [FilmGrid],
  templateUrl: './playing.html',
  styleUrl: './playing.scss'
})
export class Playing {

}
