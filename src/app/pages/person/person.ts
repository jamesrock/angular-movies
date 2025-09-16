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
  private http = inject(HttpClient);
  private activatedRoute = inject(ActivatedRoute);
  loaded = signal(false);
  person = signal<person>({});
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.fetchData(params.get('id') || '');
    });;
  };
  fetchData(id: string) {
    this.loaded.set(false);
    this.http.get(api.getPersonPath(id), api.fetch_options).subscribe((data: any) => {
      this.person.set(data);
      this.loaded.set(true);
    });
  };
}
