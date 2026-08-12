# FRD — NativaMarket

Este documento describe, pantalla por pantalla, cada funcionalidad **Must** del MVP: qué ve el usuario, qué entra (inputs), qué sale (outputs) y los casos borde que hay que manejar.

> **Estado del prototipo (D2):** el **Feature 1 (Catálogo + Ficha de producto)** está construido y cableado a los datos de `data/products.json`, con navegación en ambos sentidos. Los **Features 2, 3 y 4** son el roadmap del MVP y todavía no están implementados en el prototipo.

---

## Feature 1 — Catálogo y ficha de producto con sello de origen *(construido)*

### Pantalla A: Catálogo (home)
- **Qué ve el usuario:** una cuadrícula de productos generada desde el archivo de datos. Cada tarjeta muestra la imagen del producto, nombre, fabricante, categoría, precio en GTQ y una etiqueta de "Hecho en Guatemala" con el lugar de origen. Arriba hay filtros por categoría (Todos, Ropa, Hogar, Alimentos).
- **Inputs:** selección de categoría; clic en una tarjeta ("Ver producto").
- **Outputs:** la lista de productos renderizada; al abrir un producto se navega a su ficha.
- **Casos borde:**
  - No hay productos que mostrar (categoría vacía) → mensaje amable "Todavía no hay productos en esta categoría. Prueba con otra."
  - Producto agotado → se muestra con etiqueta "Agotado", sin botón de compra en la tarjeta.
  - Datos no disponibles / página abierta sin servidor → mensaje de error recordando abrirla servida (no con doble clic).

### Pantalla B: Ficha de producto
- **Qué ve el usuario:** imagen grande del producto, **sello de origen** ("Hecho en" + fabricante y departamento de Guatemala), nombre, fabricante y categoría, insignia de disponibilidad, una descripción, precio y el botón principal ("Agregar al carrito" si está disponible, o "Avísame cuando esté disponible" si está agotado). Un enlace "Volver al catálogo" regresa a la Pantalla A.
- **Inputs:** el producto se identifica por su `id` en la dirección; botón principal; enlace "Volver al catálogo".
- **Outputs:** el detalle del producto correspondiente renderizado desde el archivo de datos.
- **Casos borde:**
  - Producto no encontrado (id inválido) → estado vacío amable "No encontramos este producto. Vuelve al catálogo para seguir explorando."
  - Producto agotado → el botón principal cambia a "Avísame cuando esté disponible".

## Feature 2 — Carrito de compras y checkout con envío *(roadmap, no implementado aún)*

### Pantalla A: Carrito
- **Qué ve el usuario:** lista de productos agregados (con fabricante), cantidad editable, subtotal por producto y total. Botón "Continuar al pago".
- **Inputs:** cambiar cantidad; eliminar producto; continuar.
- **Outputs:** total actualizado en tiempo real; costo de envío estimado.
- **Casos borde:**
  - Carrito vacío → mensaje y botón para volver al catálogo.
  - Un producto se agotó antes de pagar → se marca y se pide quitarlo para continuar.

### Pantalla B: Checkout
- **Qué ve el usuario:** formulario de datos de entrega (nombre, dirección, teléfono), resumen del pedido, **costo de envío calculado** y total final. Botón "Confirmar pedido".
- **Inputs:** datos de entrega; método de pago; confirmar.
- **Outputs:** número de pedido y confirmación en pantalla; resumen enviado.
- **Casos borde:**
  - Campos obligatorios vacíos o inválidos → validación con mensaje claro por campo.
  - Pago rechazado → mensaje de error y opción de reintentar sin perder el pedido.
  - Dirección fuera de cobertura de envío → aviso antes de confirmar.

## Feature 3 — Respaldo de garantía vía soporte *(roadmap, no implementado aún)*

### Pantalla: Soporte / Devolución
- **Qué ve el usuario:** acceso desde el detalle del pedido a "Reportar un problema / Solicitar devolución". Formulario con motivo, pedido asociado y opción de adjuntar foto.
- **Inputs:** selección del pedido; motivo; descripción; foto opcional; enviar.
- **Outputs:** número de ticket y confirmación de que soporte dará seguimiento manual.
- **Casos borde:**
  - Pedido fuera del plazo de garantía → se informa y se ofrece contacto directo.
  - Envío de ticket sin conexión → se guarda el intento y se avisa que se reenviará.
  - Ticket duplicado del mismo pedido → se enlaza al ticket existente en vez de crear otro.

---

## Feature 4 — Registro de interés (Should, referencia)

- **Qué ve el usuario:** en productos agotados o en pre-venta, botón "Avísame cuando esté disponible".
- **Inputs:** correo o teléfono del comprador.
- **Outputs:** confirmación de que quedó registrado para aviso.
- **Casos borde:** contacto ya registrado para ese producto → no se duplica y se confirma que ya está en la lista.
