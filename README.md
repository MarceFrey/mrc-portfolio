# MRC Portfolio

Base con JavaScript, React, Vite y Tailwind CSS.

## Desarrollo

Requiere Node.js 22.12+ o 24 LTS y npm.

```sh
npm install
npm run dev
```

## Comandos

- `npm run dev`: servidor de desarrollo.
- `npm run build`: genera el sitio en `dist/`.
- `npm run preview`: sirve el build localmente.
- `npm run lint`: analiza el código con Oxlint.

## Estructura

- `src/App.jsx`: página y secciones.
- `src/components/Section.jsx`: sección reutilizable.
- `src/data/portfolio.js`: presentación, email, proyectos y tecnologías.
- `src/index.css`: Tailwind y estilos globales.
- `public/`: archivos estáticos.

Los proyectos y el email están vacíos para completar con datos reales. Agregá proyectos con las propiedades `id`, `title`, `description` y `url`.

Tailwind usa el plugin oficial `@tailwindcss/vite`.

