import { RouterLink } from '@angular/router';
import { Component, input } from '@angular/core';
import { Poster } from '../poster/poster';

@Component({
  selector: 'films',
  imports: [RouterLink, Poster],
  templateUrl: './films.html'
})
export class Films {
  items = input<any[]>([]);
  name = input('');
}