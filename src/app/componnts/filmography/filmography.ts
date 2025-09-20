import { Component, signal, input, inject } from '@angular/core';
import { Films } from '../films/films';
import { dedupe, addProps } from '../../../api';
import { GetterClient } from '../../services/base';
import type { Film } from '../../../api';

@Component({
  selector: 'filmography',
  imports: [Films],
  templateUrl: './filmography.html'
})
export class Filmography {
  private http = inject(GetterClient);
  cast = signal<Film[]>([]);
  crew = signal<Film[]>([]);
  id = input('');
  ngOnInit(): void {
    this.fetchData(this.id());
  };
  fetchData(id: string) {
    this.http.getFilmography(id).subscribe((data) => {
      this.cast.set(addProps(dedupe(data.cast, 'cast'), 'cast'));
      this.crew.set(addProps(dedupe(data.crew, 'crew'), 'crew'));
    });
  };
}
