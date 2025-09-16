import { Component, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { Poster } from '../poster/poster';
import { addSearchProps, addProp } from '../../../api';
import { GetterClient } from '../../services/base';

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
  private http = inject(GetterClient);
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
    
    const movieResults = this.http.getMovieResults(query);
    const peopleResults = this.http.getPeopleResults(query);

    forkJoin([movieResults, peopleResults]).subscribe(([movies, people]:any) => {
      cache[query] = addSearchProps([...addProp(movies.results, 'media_type', 'movie'), ...addProp(people.results, 'media_type', 'person')]);
      this.results.set(cache[query]);
    });
  };
  clearSearch() {
    this.query.setValue('');
    this.results.set([]);
  };
}
