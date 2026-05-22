import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import { HeroComponent } from './sections/hero/hero';
import { AboutComponent } from './sections/about/about';
import { ServicesComponent } from './sections/services/services';
import { ExperienceComponent } from './sections/experience/experience';
import { ContactComponent } from './sections/contact/contact';
import { siteConfig } from './config/site';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    ExperienceComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private meta = inject(Meta);
  private titleService = inject(Title);

  ngOnInit(): void {
    this.titleService.setTitle(`${siteConfig.name} — Ingeniero Forestal Chile`);

    this.meta.addTags([
      { name: 'description', content: siteConfig.description },
      { property: 'og:title', content: `${siteConfig.name} — Ingeniero Forestal Chile` },
      { property: 'og:description', content: siteConfig.description },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: `${siteConfig.name} — Ingeniero Forestal Chile` },
      { name: 'twitter:description', content: siteConfig.description },
    ]);
  }
}
