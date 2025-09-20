import { Component, OnInit, inject, signal } from '@angular/core';
import { Films } from '../films/films';
import { GetterClient } from '../../services/base'; 
import type { Film } from '../../../api';

@Component({
  selector: 'now-playing',
  imports: [Films],
  templateUrl: './now-playing.html',
})
export class NowPlaying implements OnInit {
  private http = inject(GetterClient);
  items = signal<Film[]>([]);
  ngOnInit(): void {
    this.fetchData();
  };
  fetchData() {
    this.http.getNowPlaying().subscribe((data) => {
      this.items.set(data.results);
    });
  };
}