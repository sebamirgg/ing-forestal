import { Component, Input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

export interface ServiceItem {
  icon: LucideIconData;
  title: string;
  description: string;
}

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './service-card.html',
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: ServiceItem;
}
