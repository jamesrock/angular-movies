import { Component, OnInit, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Films } from '../films/films';
import { api } from '../../../api';

@Component({
  selector: 'coming-soon',
  imports: [Films],
  templateUrl: './coming-soon.html'
})
export class ComingSoon implements OnInit {
  items = signal([]);
  private http = inject(HttpClient);
  ngOnInit(): void {
    this.fetchData();
  };
  fetchData(page = '1') {
    this.http.get(`https://api.themoviedb.org/3/movie/upcoming?page=${page}&region=GB`, api.fetch_options).subscribe((data: any) => {
      this.items.set(data.results);
    });
  };
}
