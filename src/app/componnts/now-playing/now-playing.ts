import { Component, OnInit, inject, signal } from '@angular/core';
import { Films } from '../films/films';
import { GetterClient } from '../../services/base'; 

@Component({
  selector: 'now-playing',
  imports: [Films],
  templateUrl: './now-playing.html',
})
export class NowPlaying implements OnInit {
  private http = inject(GetterClient);
  items = signal([]);
  ngOnInit(): void {
    this.fetchData();
  };
  fetchData() {
    this.http.getNowPlaying().subscribe((data: any) => {
      this.items.set(data.results);
    });
  };
}