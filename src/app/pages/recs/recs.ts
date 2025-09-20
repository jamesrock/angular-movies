import { Component, inject, signal, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmGrid } from '../../componnts/film-grid/film-grid';
import type { Film } from '../../../api';
import { GetterClient } from '../../services/base';

@Component({
  selector: 'recs',
  imports: [FilmGrid],
  templateUrl: './recs.html',
  styleUrl: './recs.scss'
})
export class Recs {
  private http = inject(GetterClient);
  private activatedRoute = inject(ActivatedRoute);
  loaded = signal(false);
  id = signal('');
  film = signal<Film>({});
  sub = computed(() => `base on ${this.film().title}`);
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id.set(params.get('id') || '');
      this.http.getFilm(params.get('id') || '').subscribe((data) => {
        this.film.set(data);
        this.loaded.set(true);
      });
    });;
  };
}
