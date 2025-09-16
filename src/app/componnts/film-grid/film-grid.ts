import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, input, signal, inject } from '@angular/core';
import { Poster } from '../poster/poster';
import type { film } from '../../../api';
import { api, dedupeFilms, largest_size_map } from '../../../api';

@Component({
  selector: 'film-grid',
  imports: [RouterLink, Poster],
  templateUrl: './film-grid.html'
})
export class FilmGrid {
  private http = inject(HttpClient);
  name = input('');
  type = input('genre');
  sub = input('');
  id = input('');
  films = signal<film[]>([]);
  page = signal(0);
  pages = signal(0);
  size = largest_size_map['movie'];
  loadMore(page:number):void {
    this.http.get(api.getFilmsPath(this.type(), page, this.id()), api.fetch_options).subscribe((data: any) => {
      this.films.set(dedupeFilms([...this.films(), ...data.results]));
      this.pages.set(data.total_pages);
      this.page.set(page);
    });
  };
  ngOnInit(): void {
    this.loadMore(1);
  };
}
