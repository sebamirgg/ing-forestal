import { Component, HostListener, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LucideAngularModule, Menu, X } from 'lucide-angular';
import { siteConfig } from '../../config/site';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  config = siteConfig;
  menuIcon = Menu;
  closeIcon = X;

  scrolled = signal(false);
  mobileOpen = signal(false);

  private platformId = inject(PLATFORM_ID);

  @HostListener('window:scroll')
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.scrolled.set(window.scrollY > 60);
    }
  }

  toggleMobile(): void {
    this.mobileOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.mobileOpen.set(false);
  }

  get whatsappUrl(): string {
    const msg = encodeURIComponent(
      'Hola Álvaro, me interesa conocer más sobre tus servicios forestales. ¿Podemos conversar?'
    );
    return `https://wa.me/${this.config.contact.whatsapp}?text=${msg}`;
  }

  readonly navLinks = [
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Contacto', href: '#contacto' },
  ];
}
