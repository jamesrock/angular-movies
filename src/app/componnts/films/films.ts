import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Poster } from '../poster/poster';
import { largest_size_map } from '../../../api';
import type { Film } from '../../../api';

@Component({
  selector: 'films',
  imports: [RouterLink, Poster],
  templateUrl: './films.html'
})
export class Films {
  link = input('');
  name = input('');
  items = input<Film[]>([]);
  size = largest_size_map['movie'];
}