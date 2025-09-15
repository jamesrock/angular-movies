import { Component, input, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Films } from '../films/films';
import { api } from '../../../api';

@Component({
  selector: 'recommendations',
  imports: [Films],
  templateUrl: './recommendations.html',
  styleUrl: './recommendations.scss'
})
export class Recommendations {
  id = input('');
  items = signal([]);
  private http = inject(HttpClient);
  ngOnInit(): void {
    this.fetchData(this.id());
  };
  fetchData(id: string, page = '1') {
    this.http.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?page=${page}&region=GB`, api.fetch_options).subscribe((data: any) => {
      this.items.set(data.results);
    });
  };
}
