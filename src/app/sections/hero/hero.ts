import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { siteConfig } from '../../config/site';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './hero.html',
})
export class HeroComponent {
  config = siteConfig;

  get whatsappUrl(): string {
    const msg = encodeURIComponent(
      'Hola, me interesa conocer más sobre tus servicios forestales. ¿Podemos conversar?'
    );
    return `https://wa.me/${this.config.contact.whatsapp}?text=${msg}`;
  }
}
