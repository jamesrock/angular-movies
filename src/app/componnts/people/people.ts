import { RouterLink } from '@angular/router';
import { Component, input } from '@angular/core';
import { Poster } from '../poster/poster';
import { largest_size_map } from '../../../api';
import type { person } from '../../../api';

@Component({
  selector: 'people',
  imports: [RouterLink, Poster],
  templateUrl: './people.html',
  styleUrl: './people.scss'
})
export class People {
  name = input('');
  items = input<person[]>([]);
  size = largest_size_map['person'];
}