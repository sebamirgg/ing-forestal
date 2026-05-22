import { Component } from '@angular/core';
import { TimelineItemComponent } from '../../components/timeline-item/timeline-item';
import { RevealDirective } from '../../directives/reveal.directive';
import { siteConfig } from '../../config/site';
import { Briefcase, GraduationCap, Award } from 'lucide-angular';
import type { LucideIconData } from 'lucide-angular';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TimelineItemComponent, RevealDirective],
  templateUrl: './experience.html',
})
export class ExperienceComponent {
  config = siteConfig;

  private readonly iconMap: Record<string, LucideIconData> = {
    work: Briefcase,
    education: GraduationCap,
    certification: Award,
  };

  getIcon(type: string): LucideIconData {
    return this.iconMap[type] ?? Briefcase;
  }
}
