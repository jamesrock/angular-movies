import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filmography } from '../../componnts/filmography/filmography'; 
import { Poster } from '../../componnts/poster/poster';
import type { Person as PersonType } from '../../../api';
import { GetterClient } from '../../services/base';

@Component({
  selector: 'person',
  imports: [Filmography, Poster],
  templateUrl: './person.html',
  styleUrl: './person.scss'
})
export class Person {
  private http = inject(GetterClient);
  private activatedRoute = inject(ActivatedRoute);
  loaded = signal(false);
  person = signal<PersonType>({});
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.fetchData(params.get('id') || '');
    });;
  };
  fetchData(id: string) {
    this.loaded.set(false);
    this.http.getPerson(id).subscribe((data) => {
      this.person.set(data);
      this.loaded.set(true);
    });
  };
}
