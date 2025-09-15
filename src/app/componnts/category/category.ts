import { Component, OnInit, inject, signal, input, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Films } from '../films/films';
import { genres, api } from '../../../api';

@Component({
  selector: 'category',
  imports: [Films],
  templateUrl: './category.html'
})
export class Category implements OnInit {
  id = input('');
  items = signal([]);
  name = computed(() => genres[this.id()]);
  private http = inject(HttpClient);
  ngOnInit(): void {
    this.fetchData(this.id());
  };
  fetchData(id: string, page = '1') {
    this.http.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&page=${page}&region=GB&sort_by=popularity.desc&with_release_type=2%7C3`, api.fetch_options).subscribe((data: any) => {
      this.items.set(data.results);
    });
  };
}
