import { Component, signal, input, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Films } from '../films/films';
import type { film } from '../../../api';
import { dedupe, addProps, api } from '../../../api';

@Component({
  selector: 'filmography',
  imports: [Films],
  templateUrl: './filmography.html'
})
export class Filmography {
  private http = inject(HttpClient);
  cast = signal<film[]>([]);
  crew = signal<film[]>([]);
  id = input('');
  ngOnInit(): void {
    console.log('ngOnInit', this.id());
    this.fetchData(this.id());
  };
  fetchData(id: string) {
    this.http.get(api.getFilmographyPath(id), api.fetch_options).subscribe((data: any) => {
      this.cast.set(addProps(dedupe(data.cast, 'cast'), 'cast'));
      this.crew.set(addProps(dedupe(data.crew, 'crew'), 'crew'));
    });
  };
}
