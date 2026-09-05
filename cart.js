// Carrito de NativaMarket — guardado en el navegador (localStorage).
// Lo comparten el catálogo, la ficha, el carrito y el checkout.

const CART_KEY = 'nm_cart';
const ENVIO = 25; // costo de envío fijo en Q

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch (e) { return []; }
}
function saveCart(c) {
  localStorage.setItem(CART_KEY, JSON.stringify(c));
  updateCartCount();
}
function addToCart(item) {
  const c = getCart();
  const ex = c.find(x => x.id === item.id);
  if (ex) { ex.qty += item.qty; } else { c.push(item); }
  saveCart(c);
}
function removeFromCart(id) {
  saveCart(getCart().filter(x => x.id !== id));
}
function setQty(id, qty) {
  const c = getCart();
  const it = c.find(x => x.id === id);
  if (it) { it.qty = Math.max(1, qty); }
  saveCart(c);
}
function clearCart() { saveCart([]); }

function cartCount() { return getCart().reduce((n, x) => n + x.qty, 0); }
function cartSubtotal() { return getCart().reduce((s, x) => s + x.price * x.qty, 0); }
function cartTotal() { return cartSubtotal() + (getCart().length ? ENVIO : 0); }
function cartResumen() {
  return getCart().map(x => `${x.qty} x ${x.name}`).join(', ');
}

function updateCartCount() {
  const el = document.getElementById('cart-count');
  if (el) {
    const n = cartCount();
    el.textContent = n;
    el.style.display = n > 0 ? 'inline-block' : 'none';
  }
}

document.addEventListener('DOMContentLoaded', updateCartCount);
