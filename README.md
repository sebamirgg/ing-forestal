# Sitio Web — Ingeniero Forestal

Sitio web personal de una sola página (one-page) construido con **Angular 21** y **TailwindCSS v4**. Funciona como carta de presentación profesional para un ingeniero forestal chileno.

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| Angular | 21 | Framework frontend (standalone components) |
| TailwindCSS | 4 | Estilos utilitarios |
| lucide-angular | 1.0 | Iconos |
| Angular Reactive Forms | — | Formulario de contacto |
| Angular SSR | — | Pre-rendering para SEO |

---

## Instalación y desarrollo

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo (http://localhost:4200)
npm start
```

---

## Cómo editar el contenido

> **Todo el contenido editable está centralizado en un solo archivo:**
> `src/app/config/site.ts`

Abre ese archivo y busca los comentarios `// EDITAR:` para guiarte. Desde ahí puedes cambiar:

- Nombre y apellido
- Datos de contacto (email, teléfono, WhatsApp, LinkedIn, Instagram)
- Textos del hero y la bio
- Estadísticas (años de experiencia, proyectos, hectáreas)
- Historial de experiencia y formación
- Tagline del footer

**Ejemplo:**
```typescript
// Antes
name: '[Nombre Completo]',

// Después
name: 'Juan Carlos Pérez Rodríguez',
```

---

## Cómo reemplazar las imágenes placeholder

En las secciones **Hero** y **Sobre mí** hay divisores con texto `[Foto del cliente]`.

Para reemplazarlos:

1. Agrega tu imagen en `src/assets/images/` (ej: `foto-perfil.webp`, `foto-terreno.webp`)
2. Busca en los archivos HTML el comentario `<!-- EDITAR: Reemplazar este div -->` y sustituye el `<div>` placeholder por:

```html
<img
  src="assets/images/foto-perfil.webp"
  alt="[Nombre] trabajando en terreno forestal"
  class="w-72 h-96 lg:w-80 lg:h-[460px] object-cover rounded-lg"
  loading="lazy"
/>
```

Los archivos a modificar son:
- `src/app/sections/hero/hero.html` (foto hero)
- `src/app/sections/about/about.html` (foto sobre mí)

---

## Cómo conectar el formulario de contacto

El formulario actualmente solo muestra un mensaje de confirmación. Para conectarlo a un servicio real:

### Opción A — Formspree (gratuito, sin backend)
1. Crea una cuenta en [formspree.io](https://formspree.io)
2. Crea un nuevo formulario y copia el ID
3. En `src/app/sections/contact/contact.ts`, reemplaza el `console.log` con:

```typescript
fetch('https://formspree.io/f/TU_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(this.form.value),
});
```

### Opción B — EmailJS
1. Crea una cuenta en [emailjs.com](https://www.emailjs.com)
2. Instala: `npm install @emailjs/browser`
3. Sigue su documentación para enviar el `form.value`

---

## Build y deploy

### Build de producción

```bash
npm run build
# Genera la carpeta dist/ing-forestal/browser/
```

### Deploy en Vercel

1. Conecta el repositorio en [vercel.com](https://vercel.com) y configura:
   - **Framework Preset:** Angular
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/ing-forestal/browser`

### Deploy en Netlify

- **Build command:** `npm run build`
- **Publish directory:** `dist/ing-forestal/browser`

### Deploy en Cloudflare Pages

- **Framework preset:** Angular
- **Build command:** `npm run build`
- **Build output directory:** `dist/ing-forestal/browser`

---

## Estructura del proyecto

```
src/
  app/
    config/
      site.ts              ← TODO EL CONTENIDO EDITABLE AQUÍ
    sections/
      hero/                ← Sección hero (portada)
      about/               ← Sección "Sobre mí"
      services/            ← Sección "Servicios"
      experience/          ← Sección "Experiencia"
      contact/             ← Sección "Contacto" + formulario
    components/
      navbar/              ← Barra de navegación sticky
      footer/              ← Pie de página
      service-card/        ← Tarjeta de servicio reutilizable
      timeline-item/       ← Ítem de línea de tiempo
    directives/
      reveal.directive.ts  ← Animación fade-in al scroll
  styles.css               ← Tailwind v4 + paleta + fuentes
index.html                 ← SEO, Open Graph, Schema.org, Google Fonts
```

---

## Paleta de colores

| Variable | Hex | Uso |
|---|---|---|
| `bosque` | `#2D4A3E` | Verde profundo — primario |
| `musgo` | `#6B7F4A` | Verde oliva — secundario |
| `tierra` | `#8B6F47` | Tierra/madera — acento |
| `arcilla` | `#B85C3C` | Terracota — CTAs destacados |
| `hueso` | `#F5F1E8` | Fondo principal |
| `niebla` | `#E8E2D4` | Fondo alterno |
| `carbon` | `#1A1A1A` | Texto principal |
| `piedra` | `#5A5A52` | Texto secundario |

---

## Licencia

Proyecto de uso privado. Todos los derechos reservados.
