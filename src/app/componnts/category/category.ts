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
  link = computed(() => `/genre/${this.id()}`);
  private http = inject(HttpClient);
  ngOnInit(): void {
    this.fetchData(this.id());
  };
  fetchData(id: string) {
    this.http.get(api.getCategoryPath(id), api.fetch_options).subscribe((data: any) => {
      this.items.set(data.results);
    });
  };
}
