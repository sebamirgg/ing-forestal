import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { siteConfig } from '../../config/site';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about.html',
})
export class AboutComponent {
  config = siteConfig;
}
