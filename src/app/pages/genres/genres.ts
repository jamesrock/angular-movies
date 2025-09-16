import { Component, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { api, genre } from '../../../api';

@Component({
  selector: 'app-genres',
  imports: [RouterLink],
  templateUrl: './genres.html',
  styleUrl: './genres.scss'
})
export class Genres {
  private http = inject(HttpClient);
  loaded = signal(false);
  genres = signal<genre[]>([]);
  ngOnInit(): void {
    this.fetchData();  
  };
  fetchData() {
    this.loaded.set(false);
    this.http.get(api.getGenresPath(), api.fetch_options).subscribe((data: any) => {
      this.genres.set(data.genres);
      this.loaded.set(true);
    });
  };
}
