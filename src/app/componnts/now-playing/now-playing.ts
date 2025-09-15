import { Component, OnInit, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Films } from '../films/films';
import { api } from '../../../api';

@Component({
  selector: 'now-playing',
  imports: [Films],
  templateUrl: './now-playing.html',
})
export class NowPlaying implements OnInit {
  items = signal([]);
  private http = inject(HttpClient);
  ngOnInit(): void {
    this.fetchData();
  };
  fetchData(page = '1') {
    this.http.get(`https://api.themoviedb.org/3/movie/now_playing?page=${page}&region=GB`, api.fetch_options).subscribe((data: any) => {
      this.items.set(data.results);
    });
  };
}