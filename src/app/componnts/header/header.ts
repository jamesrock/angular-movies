import { Component } from '@angular/core';
import { Search } from '../search/search';
import { Navigation } from '../navigation/navigation';

@Component({
  selector: 'app-header',
  imports: [Search, Navigation],
  templateUrl: './header.html'
})
export class Header {

}
