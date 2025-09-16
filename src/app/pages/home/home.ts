import { Component } from '@angular/core';
import { Category } from '../../componnts/category/category';
import { NowPlaying } from '../../componnts/now-playing/now-playing';
import { ComingSoon } from '../../componnts/coming-soon/coming-soon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home',
  imports: [NowPlaying, ComingSoon, Category, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
