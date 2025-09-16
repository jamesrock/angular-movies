import { Component, input, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from '../people/people';
import { dedupe, sortByPriority, addProps, api } from '../../../api';
import type { person } from '../../../api';

@Component({
  selector: 'cast-and-crew',
  imports: [People],
  templateUrl: './cast-and-crew.html'
})
export class CastAndCrew {
  private http = inject(HttpClient);
  cast = signal<person[]>([]);
  crew = signal<person[]>([]);
  id = input('');
  ngOnInit(): void {
    this.fetchData(this.id());
  };
  fetchData(id: string) {
    this.http.get(api.getCreditsPath(id), api.fetch_options).subscribe((data: any) => {
      this.cast.set(addProps(dedupe(data.cast, 'cast'), 'cast'));
      this.crew.set(addProps(dedupe(sortByPriority(data.crew, 'job'), 'crew'), 'crew'));
    });
  };
}