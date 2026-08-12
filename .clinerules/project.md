# NativaMarket — Brand Brief

## What it is
NativaMarket es un marketplace web para el consumidor guatemalteco que quiere comprar productos hechos en Guatemala —ropa, accesorios, hogar y alimentos— en un solo lugar. La persona entra a descubrir productos, ver de qué fabricante y de qué parte del país vienen (sello de origen), y comprarlos con confianza.

## Palette
- Primary: #4A2545 (ciruela profundo — navbar, títulos y fondos de marca)
- Accent: #C06C84 (rosa — se usa en los precios y en el botón principal "Agregar al carrito")
- Background: #F7F0F5 (crema rosado)

## Fonts
- Headings: Libre Baskerville
- Body: Karla

## Tone
Cálido, local, confiable. Not this: no debe sentirse como un bazar frío y genérico tipo Temu lleno de productos importados sin identidad — nada de azul corporativo ni fotos de stock impersonales.

## Screens
- Catálogo (home) — lista de productos hechos en Guatemala con su sello de origen
- Ficha de producto — detalle de un producto para decidirse y comprarlo
- Todas las pantallas comparten el navbar superior; desde la Ficha de producto se regresa al catálogo con "Volver".

## Stack, pinned
Plain HTML, CSS and JavaScript reading a local JSON file, styled with Bootstrap 5 loaded from a
CDN. No framework, no npm, no build step.
Bootstrap 5 — two lines, both required:
```html
<!-- in <head> -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
<!-- just before </body> -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
```
