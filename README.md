# NativaMarket

NativaMarket es un marketplace donde cualquier consumidor guatemalteco puede descubrir, comparar y comprar en un solo lugar productos hechos en Guatemala —ropa, calzado, accesorios, muebles y alimentos envasados— sin tener que rastrear marca por marca en redes sociales. Es "lo hecho en Guatemala" reunido y comprable con confianza: como Temu, pero de fabricantes nacionales.

## Demo en vivo

👉 **https://mirnajuarezz0298.github.io/NativaMarket/**

El prototipo abre en esa URL (GitHub Pages). Muestra el **Catálogo** (home) con los productos hechos en Guatemala y su sello de origen, cargados desde `data/products.json`, y la **Ficha de producto**, a la que se llega al abrir cualquier producto y desde la que se regresa al catálogo.

> Para verlo localmente, ábrelo **servido** (por ejemplo con la extensión Live Server de VS Code), no con doble clic: una página abierta con doble clic no puede leer su archivo de datos.

## The three Musts

- **Catálogo con ficha de producto y sello de origen** — el comprador busca, filtra y descubre productos nacionales, y ve de qué fabricante y de qué parte de Guatemala viene cada uno.
- **Carrito de compras y checkout con envío** — el comprador arma su pedido con productos de distintos fabricantes y paga en un solo lugar, con el costo de envío ya calculado.
- **Respaldo de garantía vía soporte** — si algo llega mal, el comprador tiene un canal de soporte y devolución que le da confianza para comprar.

## Core features at a glance

| Feature | Prioridad | Para el consumidor |
|---|---|---|
| Catálogo + ficha con sello de origen | Must | Descubrir y confiar en productos hechos en Guatemala |
| Carrito y checkout con envío | Must | Comprar de varios fabricantes en un solo pago |
| Respaldo de garantía vía soporte | Must | Comprar con confianza y resolver problemas |
| Registro de interés (restock / pre-venta) | Should | No perder productos agotados o por lanzar |
| Envío consolidado en una sola caja | Could | Recibir todo junto y pagar menos por envío |
