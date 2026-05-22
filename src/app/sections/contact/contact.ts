import { Component } from '@angular/core';
import { LucideAngularModule, Mail, Phone, MapPin, Linkedin } from 'lucide-angular';
import { RevealDirective } from '../../directives/reveal.directive';
import { siteConfig } from '../../config/site';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LucideAngularModule, RevealDirective],
  templateUrl: './contact.html',
})
export class ContactComponent {
  config = siteConfig;
  mailIcon = Mail;
  phoneIcon = Phone;
  mapIcon = MapPin;
  linkedinIcon = Linkedin;

  get whatsappUrl(): string {
    const msg = encodeURIComponent(
      'Hola, me interesa conocer más sobre tus servicios forestales. ¿Podemos conversar?'
    );
    return `https://wa.me/${this.config.contact.whatsapp}?text=${msg}`;
  }
}
