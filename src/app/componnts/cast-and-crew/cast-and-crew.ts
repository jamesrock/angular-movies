import { Component, input, inject, signal } from '@angular/core';
import { People } from '../people/people';
import { dedupe, sortByPriority, addProps } from '../../../api';
import type { Person } from '../../../api';
import { GetterClient } from '../../services/base';

@Component({
  selector: 'cast-and-crew',
  imports: [People],
  templateUrl: './cast-and-crew.html'
})
export class CastAndCrew {
  private http = inject(GetterClient);
  cast = signal<Person[]>([]);
  crew = signal<Person[]>([]);
  id = input('');
  ngOnInit(): void {
    this.fetchData(this.id());
  };
  fetchData(id: string) {
    this.http.getCredits(id).subscribe((data) => {
      this.cast.set(addProps(dedupe(data.cast, 'cast'), 'cast'));
      this.crew.set(addProps(dedupe(sortByPriority(data.crew, 'job'), 'crew'), 'crew'));
    });
  };
}