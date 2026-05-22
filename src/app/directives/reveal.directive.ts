import { Directive, ElementRef, Input, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  /** Delay CSS class: 'reveal-delay-1' | 'reveal-delay-2' | 'reveal-delay-3' | 'reveal-delay-4' */
  @Input() revealDelay?: string;

  private observer?: IntersectionObserver;
  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.el.nativeElement.classList.add('reveal');
    if (this.revealDelay) {
      this.el.nativeElement.classList.add(this.revealDelay);
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('is-visible');
          this.observer?.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.08 },
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
