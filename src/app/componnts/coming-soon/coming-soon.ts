import { Component, OnInit, inject, signal } from '@angular/core';
import { Films } from '../films/films';
import { GetterClient } from '../../services/base';

@Component({
  selector: 'coming-soon',
  imports: [Films],
  templateUrl: './coming-soon.html'
})
export class ComingSoon implements OnInit {
  private http = inject(GetterClient);
  items = signal([]);
  ngOnInit(): void {
    this.fetchData();
  };
  fetchData() {
    this.http.getComingSoon().subscribe((data: any) => {
      this.items.set(data.results);
    });
  };
}
