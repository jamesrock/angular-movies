import { Component, signal, input, inject } from '@angular/core';
import { Films } from '../films/films';
import type { film } from '../../../api';
import { dedupe, addProps } from '../../../api';
import { GetterClient } from '../../services/base';

@Component({
  selector: 'filmography',
  imports: [Films],
  templateUrl: './filmography.html'
})
export class Filmography {
  private http = inject(GetterClient);
  cast = signal<film[]>([]);
  crew = signal<film[]>([]);
  id = input('');
  ngOnInit(): void {
    this.fetchData(this.id());
  };
  fetchData(id: string) {
    this.http.getFilmography(id).subscribe((data: any) => {
      this.cast.set(addProps(dedupe(data.cast, 'cast'), 'cast'));
      this.crew.set(addProps(dedupe(data.crew, 'crew'), 'crew'));
    });
  };
}
