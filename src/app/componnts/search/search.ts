import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Poster } from '../poster/poster';

type result = {
  id?: string;
  media_type?: string;
  poster?: string;
  name?: string;
};

@Component({
  selector: 'app-search',
  imports: [Poster, RouterLink],
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class Search {
  results = signal<result[]>([]);

}

// item[media_type_profile_path[item.media_type]]
// item[media_type_name[item.media_type]]