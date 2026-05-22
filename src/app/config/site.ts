/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  ARCHIVO DE CONFIGURACIÓN DEL SITIO                      ║
 * ║  Edita este archivo para actualizar todo el contenido.   ║
 * ║  Busca los comentarios "EDITAR:" para guiarte.          ║
 * ╚══════════════════════════════════════════════════════════╝
 */

export const siteConfig = {
  // EDITAR: Nombre completo del profesional
  name: 'Álvaro Castillo Cuevas',

  // EDITAR: Nombre corto (para el footer y badges)
  shortName: 'Álvaro Castillo Cuevas',

  // EDITAR: Meta description (máx. 160 caracteres para SEO)
  description:
    'Ingeniería forestal con propósito: planes de manejo, consultoría técnica y proyectos que equilibran producción responsable y conservación en Chile.',

  // ─── Datos de contacto ────────────────────────────────────────────
  contact: {
    email: '[alvarocastillocu@gmail.com]',
    phone: '[+56 9 64945093]',
    whatsapp: '+56964945093',
    location: 'Trongol Bajo, Curanilahue · Biobío, Chile',
    linkedin: 'https://www.linkedin.com/in/%C3%A1lvaro-enrique-castillo-cuevas-3b656223a/',
    instagram: 'asvpcastillo_',
  },

  // ─── Hero ──────────────────────────────────────────────────────────
  hero: {
    subtitle:
      'Donde el conocimiento técnico y el respeto por el territorio se unen para hacer del bosque un aliado productivo y sustentable.'
  },

  // ─── Sección "Sobre mí" ────────────────────────────────────────────
  about: {
    bio: [
      'Soy Álvaro Castillo Cuevas, Ingeniero Forestal egresado de la Universidad de Concepción. Mi trabajo parte de una convicción simple: el bosque no es solo un recurso, es un sistema vivo que merece ser manejado con criterio técnico y respeto por sus ciclos naturales.',
      'Mi experiencia en CONAF e INFOR me permitió entender el sector desde adentro —sus normas, sus tiempos, sus desafíos— y conocer de cerca la realidad de los pequeños propietarios rurales, que a menudo tienen el territorio pero no el acompañamiento técnico que necesitan.',
      'Hoy trabajo de manera independiente desde Trongol Bajo, Curanilahue. Creo que la producción forestal responsable y el equilibrio ecológico no se contradicen: cuando se hace bien, el manejo del bosque beneficia al propietario, a la comunidad y al ecosistema.',
    ],

    stats: [
      { value: '[5]+', label: 'Años trabajando el territorio' },
      { value: '[10]+', label: 'Proyectos acompañados' },
      // { value: '[X.XXX]+', label: 'Hectáreas gestionadas' },
    ],
  },

  // ─── Sección "Experiencia" ─────────────────────────────────────────
  experience: [
    {
      institution: 'CONAF',
      fullName: 'Corporación Nacional Forestal',
      role: '[Cargo / Rol]',
      period: '[Año inicio] – [Año término]',
      achievements: [
        '[Describir logro o responsabilidad principal]',
        '[Proyecto o acción destacada]',
      ],
      type: 'work' as const,
    },
    {
      institution: 'INFOR',
      fullName: 'Instituto Forestal de Chile',
      role: '[Cargo / Rol]',
      period: '[Año inicio] – [Año término]',
      achievements: [
        '[Describir logro o responsabilidad principal]',
        '[Proyecto o publicación destacada]',
      ],
      type: 'work' as const,
    },
    {
      institution: 'Universidad de Concepción',
      fullName: 'Facultad de Ciencias Forestales',
      role: 'Ingeniería Forestal',
      period: 'Egresado [Año]',
      achievements: [
        '[Completar: mención, honor o especialidad si corresponde]',
      ],
      type: 'education' as const,
    },
  ],

  // ─── Agrupaciones / Membresías ────────────────────────────────────────
  memberships: [
    {
      name: 'Cooperativa Ragko',
      description: 'Cooperativa Apícola',
      logoUrl: 'https://scontent.cdninstagram.com/v/t51.2885-19/447773719_1283635155930248_5728348215608373868_n.jpg?_nc_cat=106&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=cgWu8_ryMxQQ7kNvwFaJlq2&_nc_oc=Adrpr-Kxpz3NKoGx92a3KGRF5jxYFrNsu_m_rAkoFO6ZLnkf0_qbnSj0cn3Oy1fO73-qwBEcbbrmKSopH_4w3LFu&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_ss=7b6a8&oh=00_Af61DY0SmNUt2qbQfJHnVCwfoBC7sIMyx6XLZiwm8K2SVw&oe=6A15BC0D',
    },
    {
      name: 'Pensamiento Trongol Bajo',
      description: '',
      logoUrl: 'https://i.ibb.co/Fbjnq3G6/470923440-1138447231138237-8662418479334098606-n.jpg',
    },
  ],

  // ─── Footer ────────────────────────────────────────────────────────
  tagline: 'Ingeniería forestal con arraigo territorial · Curanilahue, Chile',

  // Año automático (no editar)
  year: new Date().getFullYear(),
} as const;

export type SiteConfig = typeof siteConfig;
