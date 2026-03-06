
// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Precios (ARS) — EDITABLES
const precios = { formateo: 25000, limpieza: 20000, ssd: 30000 };

// Render de precios
const setText = (id, val) => {
  const el = document.getElementById(id);
  if(!el) return;
  el.textContent = new Intl.NumberFormat('es-AR', { style: 'decimal', maximumFractionDigits: 0 }).format(val);
};
setText('precio-formateo', precios.formateo);
setText('precio-limpieza', precios.limpieza);
setText('precio-ssd', precios.ssd);
