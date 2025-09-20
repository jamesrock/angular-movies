import { Component, OnInit, inject, signal } from '@angular/core';
import { Films } from '../films/films';
import { GetterClient } from '../../services/base';
import type { Film } from '../../../api';

@Component({
  selector: 'coming-soon',
  imports: [Films],
  templateUrl: './coming-soon.html'
})
export class ComingSoon implements OnInit {
  private http = inject(GetterClient);
  items = signal<Film[]>([]);
  ngOnInit(): void {
    this.fetchData();
  };
  fetchData() {
    this.http.getComingSoon().subscribe((data) => {
      this.items.set(data.results);
    });
  };
}
