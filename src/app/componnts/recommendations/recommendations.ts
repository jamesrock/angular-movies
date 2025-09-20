import { Component, input, inject, signal, computed } from '@angular/core';
import { Films } from '../films/films';
import { GetterClient } from '../../services/base';
import type { Film } from '../../../api';

@Component({
  selector: 'recommendations',
  imports: [Films],
  templateUrl: './recommendations.html',
  styleUrl: './recommendations.scss'
})
export class Recommendations {
  private http = inject(GetterClient);
  id = input('');
  items = signal<Film[]>([]);
  link = computed(() => `/recs/${this.id()}`);
  ngOnInit(): void {
    this.fetchData(this.id());
  };
  fetchData(id: string) {
    this.http.getRecommendations(id).subscribe((data) => {
      this.items.set(data.results);
    });
  };
}
