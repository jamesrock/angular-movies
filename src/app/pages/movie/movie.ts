import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Poster } from '../../componnts/poster/poster';
import { CastAndCrew } from '../../componnts/cast-and-crew/cast-and-crew';
import { Recommendations } from '../../componnts/recommendations/recommendations';
import { Genres } from '../../componnts/genres/genres';
import { toTime, floorRating, getRatingClass, DummyFilm } from '../../../api';
import type { Film } from '../../../api';
import { GetterClient } from '../../services/base';

@Component({
  selector: 'movie',
  imports: [Poster, CastAndCrew, Recommendations, Genres],
  templateUrl: './movie.html',
  styleUrl: './movie.scss'
})
export class Movie {
  private http = inject(GetterClient);
  private activatedRoute = inject(ActivatedRoute);
  loaded = signal(false);
  id = signal('');
  film = signal<Film>(DummyFilm);
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id.set(params.get('id') || '');
      this.fetchData(params.get('id') || '');
    });;
  };
  fetchData(id: string) {
    this.loaded.set(false);
    this.http.getFilm(id).subscribe((data) => {
      this.film.set({
        ...data,
        duration: toTime(data.runtime ?? 0), 
        rating: floorRating(data.vote_average ?? 0), 
        ratingClass: `rating ${getRatingClass(data.vote_average ?? 0)}`, 
      });
      this.loaded.set(true);
    });
  };
}
