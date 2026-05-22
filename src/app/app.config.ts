import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { LUCIDE_ICONS, LucideIconProvider } from 'lucide-angular';
import {
  Trees,
  FileText,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  MessageCircle,
  Menu,
  X,
  Award,
  GraduationCap,
  ArrowRight,
  ChevronRight,
} from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider({
        Trees,
        FileText,
        Briefcase,
        Mail,
        Phone,
        MapPin,
        Linkedin,
        Instagram,
        MessageCircle,
        Menu,
        X,
        Award,
        GraduationCap,
        ArrowRight,
        ChevronRight,
      }),
    },
  ],
};
