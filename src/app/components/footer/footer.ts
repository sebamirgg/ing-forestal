import { Component } from '@angular/core';
import { LucideAngularModule, Linkedin, Instagram, MessageCircle } from 'lucide-angular';
import { siteConfig } from '../../config/site';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
})
export class FooterComponent {
  config = siteConfig;
  linkedinIcon = Linkedin;
  instagramIcon = Instagram;
  whatsappIcon = MessageCircle;

  readonly quickLinks = [
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Contacto', href: '#contacto' },
  ];
}
