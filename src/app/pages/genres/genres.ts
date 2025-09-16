import { Component, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { genre } from '../../../api';
import { GetterClient } from '../../services/base';

@Component({
  selector: 'app-genres',
  imports: [RouterLink],
  templateUrl: './genres.html',
  styleUrl: './genres.scss'
})
export class Genres {
  private http = inject(GetterClient);
  loaded = signal(false);
  genres = signal<genre[]>([]);
  ngOnInit(): void {
    this.fetchData();  
  };
  fetchData() {
    this.loaded.set(false);
    this.http.getGenres().subscribe((data: any) => {
      this.genres.set(data.genres);
      this.loaded.set(true);
    });
  };
}
