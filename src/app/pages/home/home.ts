import { Component } from '@angular/core';
import { Category } from '../../componnts/category/category';
import { NowPlaying } from '../../componnts/now-playing/now-playing';
import { ComingSoon } from '../../componnts/coming-soon/coming-soon';

@Component({
  selector: 'home',
  imports: [NowPlaying, ComingSoon, Category],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
