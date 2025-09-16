import { Component, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FilmGrid } from '../../componnts/film-grid/film-grid';
import type { film } from '../../../api';
import { api } from '../../../api';

@Component({
  selector: 'recs',
  imports: [FilmGrid],
  templateUrl: './recs.html',
  styleUrl: './recs.scss'
})
export class Recs {
  private http = inject(HttpClient);
  private activatedRoute = inject(ActivatedRoute);
  loaded = signal(false);
  id = signal('');
  film = signal<film>({});
  sub = computed(() => `base on ${this.film().title}`);
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id.set(params.get('id') || '');
      this.http.get(api.getFilmPath(params.get('id') || ''), api.fetch_options).subscribe((data: film) => {
        this.film.set(data);
        this.loaded.set(true);
      });
    });;
  };
}
