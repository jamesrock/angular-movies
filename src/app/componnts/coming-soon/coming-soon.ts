import { Component, OnInit, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Films } from '../films/films';
import { api } from '../../../api';

@Component({
  selector: 'coming-soon',
  imports: [Films],
  templateUrl: './coming-soon.html'
})
export class ComingSoon implements OnInit {
  items = signal([]);
  private http = inject(HttpClient);
  ngOnInit(): void {
    this.fetchData();
  };
  fetchData() {
    this.http.get(api.getComingSoonPath(), api.fetch_options).subscribe((data: any) => {
      this.items.set(data.results);
    });
  };
}
