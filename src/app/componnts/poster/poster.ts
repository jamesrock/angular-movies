import { Component, input, computed } from '@angular/core';
import { api } from '../../../api';

@Component({
  selector: 'poster',
  imports: [],
  templateUrl: './poster.html',
  styleUrl: './poster.scss'
})
export class Poster {
  path = input('');
  size = input('original');
  src = computed(() => api.getPosterPath(this.path(), this.size()));
}