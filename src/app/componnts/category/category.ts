import { Component, OnInit, inject, signal, input, computed } from '@angular/core';
import { Films } from '../films/films';
import { genres } from '../../../api';
import { GetterClient } from '../../services/base';
import type { Film } from '../../../api';

@Component({
  selector: 'category',
  imports: [Films],
  templateUrl: './category.html'
})
export class Category implements OnInit {
  private http = inject(GetterClient);
  id = input('');
  items = signal<Film[]>([]);
  name = computed(() => genres[this.id()]);
  link = computed(() => `/genre/${this.id()}`);
  ngOnInit(): void {
    this.fetchData(this.id());
  };
  fetchData(id: string) {
    this.http.getCategory(id).subscribe((data) => {
      this.items.set(data.results);
    });
  };
}
