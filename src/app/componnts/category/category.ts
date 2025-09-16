import { Component, OnInit, inject, signal, input, computed } from '@angular/core';
import { Films } from '../films/films';
import { genres } from '../../../api';
import { GetterClient } from '../../services/base';

@Component({
  selector: 'category',
  imports: [Films],
  templateUrl: './category.html'
})
export class Category implements OnInit {
  private http = inject(GetterClient);
  id = input('');
  items = signal([]);
  name = computed(() => genres[this.id()]);
  link = computed(() => `/genre/${this.id()}`);
  ngOnInit(): void {
    this.fetchData(this.id());
  };
  fetchData(id: string) {
    this.http.getCategory(id).subscribe((data: any) => {
      this.items.set(data.results);
    });
  };
}
