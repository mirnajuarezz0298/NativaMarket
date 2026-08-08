# FRD — NativaMarket

Este documento describe, pantalla por pantalla, cada funcionalidad **Must** del MVP: qué ve el usuario, qué entra (inputs), qué sale (outputs) y los casos borde que hay que manejar.

---

## Feature 1 — Catálogo y ficha de producto con sello de origen

### Pantalla A: Catálogo
- **Qué ve el usuario:** una cuadrícula de productos. Cada tarjeta muestra foto, nombre, fabricante, precio en GTQ y una etiqueta de "Hecho en Guatemala" con el lugar de origen. Arriba: barra de búsqueda y filtros por categoría (ropa, calzado, accesorios, muebles, alimentos).
- **Inputs:** texto de búsqueda; selección de categoría; (opcional) orden por precio.
- **Outputs:** lista filtrada de productos; contador de resultados.
- **Casos borde:**
  - Búsqueda sin resultados → mensaje "No encontramos productos" + sugerencia de quitar filtros.
  - Producto agotado → se muestra con etiqueta "Agotado" y botón "Avísame" (ver Feature 4), no botón de compra.
  - Carga lenta / sin conexión → estado de carga y mensaje de error con opción de reintentar.

### Pantalla B: Ficha de producto
- **Qué ve el usuario:** fotos, nombre, descripción, precio, **sello de origen** (fabricante + departamento de Guatemala), disponibilidad y botón "Agregar al carrito".
- **Inputs:** cantidad; botón "Agregar al carrito".
- **Outputs:** confirmación visual de que se agregó; actualización del contador del carrito.
- **Casos borde:**
  - Cantidad mayor al stock disponible → se limita al máximo y se avisa.
  - Producto quedó agotado mientras se veía → el botón cambia a "Avísame".

## Feature 2 — Carrito de compras y checkout con envío

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

## Feature 3 — Respaldo de garantía vía soporte

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
