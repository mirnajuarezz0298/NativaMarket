// Vercel Serverless Function — recibe el formulario "Avísame" y guarda la fila
// en Supabase usando la SECRET key (nunca la publishable), leída de una variable
// de entorno. Este archivo corre en el servidor de Vercel, no en el navegador.

export default async function handler(req, res) {
  // Solo aceptamos POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { producto, contacto } = req.body || {};

  const SUPABASE_URL = 'https://gvctsjfbshalungoowia.supabase.co';
  const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/avisos_disponibilidad`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({ producto, contacto })
    });

    if (!r.ok) {
      const detalle = await r.text();
      return res.status(500).json({ error: detalle });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: String(e) });
  }
}
