import { Component } from '@angular/core';
import { ServiceCardComponent, ServiceItem } from '../../components/service-card/service-card';
import { RevealDirective } from '../../directives/reveal.directive';
import { Trees, FileText, Briefcase } from 'lucide-angular';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCardComponent, RevealDirective],
  templateUrl: './services.html',
})
export class ServicesComponent {
  readonly services: ServiceItem[] = [
    {
      icon: FileText,
      title: 'Planes de Manejo Forestal',
      description:
        'Diseño y tramitación de planes conformes a la normativa CONAF, con prescripciones silvícolas que cuidan la productividad sin comprometer el equilibrio del ecosistema. Para propietarios que quieren hacer las cosas bien.',
    },
    {
      icon: Trees,
      title: 'Consultoría Técnica',
      description:
        'Asesoría directa en silvicultura, certificaciones y postulación a instrumentos de fomento (CONAF, SAG, INDAP). Sin tecnicismos innecesarios: te explico lo que necesitas saber para tomar buenas decisiones sobre tu predio.',
    },
    {
      icon: Briefcase,
      title: 'Proyectos Forestales',
      description:
        'Coordinación técnica de iniciativas de forestación, reforestación y restauración de ecosistemas. Gestión integral con organismos públicos y privados para llevar tus proyectos del papel al terreno.',
    },
  ];
}
