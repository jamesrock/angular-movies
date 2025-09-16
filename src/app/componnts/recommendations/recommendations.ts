import { Component, input, inject, signal, computed } from '@angular/core';
import { Films } from '../films/films';
import { GetterClient } from '../../services/base';

@Component({
  selector: 'recommendations',
  imports: [Films],
  templateUrl: './recommendations.html',
  styleUrl: './recommendations.scss'
})
export class Recommendations {
  private http = inject(GetterClient);
  id = input('');
  items = signal([]);
  link = computed(() => `/recs/${this.id()}`);
  ngOnInit(): void {
    this.fetchData(this.id());
  };
  fetchData(id: string) {
    this.http.getRecommendations(id).subscribe((data: any) => {
      this.items.set(data.results);
    });
  };
}
