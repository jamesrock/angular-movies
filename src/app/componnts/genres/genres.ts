import { RouterLink } from '@angular/router';
import { Component, input } from '@angular/core';

@Component({
  selector: 'genres',
  imports: [RouterLink],
  templateUrl: './genres.html'
})
export class Genres {
  items = input<any>([]);
}
