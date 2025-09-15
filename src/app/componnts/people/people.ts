import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Poster } from '../poster/poster';
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
}

// getRole(type, person)
// largest_size_map.person