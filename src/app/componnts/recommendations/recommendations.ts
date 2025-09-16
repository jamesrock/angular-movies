import { Component, input, inject, signal, computed } from '@angular/core';
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
  link = computed(() => `/recs/${this.id()}`);
  private http = inject(HttpClient);
  ngOnInit(): void {
    this.fetchData(this.id());
  };
  fetchData(id: string) {
    this.http.get(api.getRecommendationsPath(id), api.fetch_options).subscribe((data: any) => {
      this.items.set(data.results);
    });
  };
}
