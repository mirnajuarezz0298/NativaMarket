// Vercel Serverless Function — recibe el pedido del checkout y lo guarda en la
// tabla "pedidos" de Supabase usando la SECRET key (nunca la publishable),
// leída de una variable de entorno. Devuelve el folio (id) y el estado que
// quedaron guardados, para que la pantalla de confirmación los muestre sin
// volver a consultar la base de datos.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { nombre, telefono, direccion, resumen_pedido, envio, total } = req.body || {};

  const SUPABASE_URL = 'https://gvctsjfbshalungoowia.supabase.co';
  const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

  // Un pedido nuevo siempre empieza como "Recibido"
  const nuevoPedido = {
    nombre, telefono, direccion, resumen_pedido, envio, total,
    estado: 'Recibido'
  };

  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/pedidos`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(nuevoPedido)
    });

    if (!r.ok) {
      const detalle = await r.text();
      return res.status(500).json({ error: detalle });
    }

    const filas = await r.json();
    const fila = filas[0];
    // Devolvemos folio y estado tal como quedaron en la fila creada
    return res.status(200).json({ folio: fila.id, estado: fila.estado });
  } catch (e) {
    return res.status(500).json({ error: String(e) });
  }
}
