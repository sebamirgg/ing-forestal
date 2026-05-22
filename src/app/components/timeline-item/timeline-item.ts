import { Component, Input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

export interface TimelineEntry {
  institution: string;
  fullName: string;
  role: string;
  period: string;
  achievements: readonly string[];
  type: 'work' | 'education' | 'certification' | 'community';
}

@Component({
  selector: 'app-timeline-item',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './timeline-item.html',
})
export class TimelineItemComponent {
  @Input({ required: true }) entry!: TimelineEntry;
  @Input() icon!: LucideIconData;
  @Input() isLast = false;
}
