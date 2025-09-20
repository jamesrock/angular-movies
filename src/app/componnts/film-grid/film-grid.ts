import { RouterLink } from '@angular/router';
import { Component, input, signal, inject } from '@angular/core';
import { Poster } from '../poster/poster';
import { dedupeFilms, largest_size_map } from '../../../api';
import { GetterClient } from '../../services/base';
import type { Film } from '../../../api';

@Component({
  selector: 'film-grid',
  imports: [RouterLink, Poster],
  templateUrl: './film-grid.html'
})
export class FilmGrid {
  private http = inject(GetterClient);
  name = input('');
  type = input('genre');
  sub = input('');
  id = input('');
  films = signal<Film[]>([]);
  page = signal(0);
  pages = signal(0);
  size = largest_size_map['movie'];
  loadMore(page:number):void {
    this.http.getFilms(this.type(), page, this.id()).subscribe((data) => {
      this.films.set(dedupeFilms([...this.films(), ...data.results]));
      this.pages.set(data.total_pages);
      this.page.set(page);
    });
  };
  ngOnInit(): void {
    this.loadMore(1);
  };
}
