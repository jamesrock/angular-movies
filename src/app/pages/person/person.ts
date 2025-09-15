import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Filmography } from '../../componnts/filmography/filmography'; 
import { Poster } from '../../componnts/poster/poster';
import { person, api } from '../../../api';

@Component({
  selector: 'person',
  imports: [Filmography, Poster],
  templateUrl: './person.html',
  styleUrl: './person.scss'
})
export class Person {
  constructor() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  };
  private http = inject(HttpClient);
  private activatedRoute = inject(ActivatedRoute);
  loaded = signal(false);
  person = signal<person>({});
  id: string | null = '';
  ngOnInit(): void {
    this.fetchData(this.id);
  };
  fetchData(id: string | null) {
    this.http.get(`https://api.themoviedb.org/3/person/${id}`, api.fetch_options).subscribe((data: any) => {
      this.person.set(data);
      this.loaded.set(true);
    });
  };
}
