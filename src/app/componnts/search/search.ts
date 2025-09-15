import { Component, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Poster } from '../poster/poster';
import { api, addSearchProps, addProp } from '../../../api';

type result = {
  id?: string;
  media_type?: string;
  poster?: string;
  name?: string;
};

const cache = {};

@Component({
  selector: 'app-search',
  imports: [Poster, RouterLink, ReactiveFormsModule],
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class Search {
  private http = inject(HttpClient);
  results = signal<result[]>([]);
  query = new FormControl('');
  ngOnInit():void {
    this.query.statusChanges.subscribe(() => {
      this.search(this.query.value || '');
    });
  };
  search(query: string) {
    if(query.length===0) {
      this.results.set([]);
      return;
    };
    if(cache[query]) {
      this.results.set(cache[query]);
      return;
    };
    this.http.get(`https://api.themoviedb.org/3/search/movie?query=${query}`, api.fetch_options).subscribe((data: any) => {
      cache[query] = addSearchProps(addProp(data.results, 'media_type', 'movie'));
      this.results.set(cache[query]);
    });
  };
  clearSearch() {
    this.query.setValue('');
    this.results.set([]);
  };
}
