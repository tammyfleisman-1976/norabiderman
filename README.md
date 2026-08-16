# Sitio conceptual — Nora Biderman

## Abrir
Abrí `index.html` en un navegador. El sitio es responsive y no requiere compilación.

## Archivos
- `index.html`: inicio
- `enfoque.html`: filosofía y metodología
- `acompanamientos.html`: servicios
- `sobre-nora.html`: perfil y trayectoria
- `reflexiones.html`: biblioteca de artículos
- `contacto.html`: formulario conectado al correo de Nora
- `styles.css`: sistema visual
- `script.js`: menú, animaciones y comportamiento del formulario
- `assets/`: fotografías integradas localmente


## Formulario de contacto
El formulario de `contacto.html` está configurado para enviar las consultas a `norabiderman@gmail.com` mediante FormSubmit. Incluye correo obligatorio, WhatsApp opcional, validación, protección honeypot, estado de envío y mensajes de éxito o error.

### Activación inicial
En el primer envío real, FormSubmit enviará un correo de activación a `norabiderman@gmail.com`. Nora debe abrir ese mensaje y confirmar la activación. Después de esa confirmación, las nuevas consultas llegarán normalmente a su casilla. Revisar también Spam o Correo no deseado.

## Dirección visual
- Paleta: azul noche, azul petróleo, bruma y marfil.
- Fotografía: escenas humanas de escucha, reflexión, liderazgo y conversación.
- Tipografía implementada: Plus Jakarta Sans como sans geométrica contemporánea de referencia.

## Fotografías
Las fotografías están incluidas dentro del proyecto, por lo que se visualizan sin depender de enlaces externos.


## Pendientes antes de publicar
1. Validar datos biográficos, títulos profesionales y wording final con Nora.
2. Incorporar testimonios únicamente cuando existan textos y permisos reales.
3. Definir dominio, analítica, política de privacidad y aviso de cookies.
4. Confirmar la familia tipográfica exacta y sus licencias de uso web.

## Fuentes visuales del prototipo
- Retrato público de Nora Biderman: CBC International.
- Escena de coaching individual: Women's Venture Fund / Anja van Beek.
- Escena de coaching ejecutivo: Lead Strong Coaching Services.
- Escena de escucha: International Coaching Federation.
- Escena de equipo: Phoenix Wellness Consulting.

## SEO técnico — actualización 2026-08-15
- Canonical URL, robots meta, Open Graph y Twitter Cards en todas las páginas.
- JSON-LD con WebSite, Person, WebPage/CollectionPage/AboutPage/ContactPage, breadcrumbs y Service donde corresponde.
- `robots.txt` y `sitemap.xml` en la raíz.
- Títulos y meta descriptions específicos por intención de página.
- Dimensiones, lazy loading/decoding y prioridad de carga en imágenes para reducir layout shift y favorecer LCP.
- Google Fonts cargada desde `<head>` en lugar de `@import`, sin cambiar tipografía ni diseño.

Después de publicar: verificar el dominio en Google Search Console, enviar `/sitemap.xml` y solicitar reindexación de las páginas principales.

## Segunda optimización técnica

- Recompresión WebP de alta calidad de las imágenes fotográficas pesadas, conservando resolución y encuadre.
- Variantes responsivas de 480 px y 768 px con `srcset` + `sizes`.
- Preload responsivo (`imagesrcset`/`imagesizes`) para las imágenes LCP.
- Metadatos Open Graph con dimensiones y tipo MIME de imagen.
- `ProfilePage` para la página Sobre Nora.
- `sitemap.xml` con `lastmod` e imágenes de cada página.
- Sin cambios de copy visible, estructura de secciones ni CSS/UI.
