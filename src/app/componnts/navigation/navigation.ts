import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core'; 
import { boxHome } from '@ng-icons/boxicons/regular';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, NgIcon],
  templateUrl: './navigation.html',
  viewProviders: [provideIcons({boxHome})]
})
export class Navigation {

}
