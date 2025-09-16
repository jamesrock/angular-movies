import { Component, signal, inject, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmGrid } from '../../componnts/film-grid/film-grid';
import { genres } from '../../../api';

@Component({
  selector: 'genre',
  imports: [FilmGrid],
  templateUrl: './genre.html',
  styleUrl: './genre.scss'
})
export class Genre {
  private activatedRoute = inject(ActivatedRoute);
  name = computed(() => genres[this.id()]);
  id = signal('');
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id.set(params.get('id') || '');
    });;
  };
}
