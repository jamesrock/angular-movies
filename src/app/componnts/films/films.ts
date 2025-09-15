import { RouterLink } from '@angular/router';
import { Component, input } from '@angular/core';
import { Poster } from '../poster/poster';
import { largest_size_map } from '../../../api';
import type { film } from '../../../api';

@Component({
  selector: 'films',
  imports: [RouterLink, Poster],
  templateUrl: './films.html'
})
export class Films {
  name = input('');
  items = input<film[]>([]);
  size = largest_size_map['movie'];
}