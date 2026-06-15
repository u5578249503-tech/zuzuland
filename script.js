const cart = document.querySelector(".cart");
const cartTrigger = document.querySelector(".cart-trigger");
const cartClose = document.querySelector(".cart-close");
const cartItems = document.querySelector("[data-cart-items]");
const cartTotal = document.querySelector("[data-cart-total]");
const cartCount = document.querySelector("[data-cart-count]");
const addButtons = document.querySelectorAll(".add-to-cart");
const filters = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product-card");
const revealSections = document.querySelectorAll(".section-reveal");

const state = {
  items: []
};

function formatPrice(value) {
  return `${value.toLocaleString("cs-CZ")} Kč`;
}

function openCart() {
  cart.setAttribute("aria-hidden", "false");
  document.body.classList.add("cart-open");
}

function closeCart() {
  cart.setAttribute("aria-hidden", "true");
  document.body.classList.remove("cart-open");
}

function renderCart() {
  cartItems.innerHTML = "";

  if (!state.items.length) {
    cartItems.innerHTML = '<p class="empty">Košík je zatím prázdný.</p>';
  } else {
    state.items.forEach((item) => {
      const row = document.createElement("div");
      row.className = "cart-line";
      row.innerHTML = `
        <div>
          <strong>${item.name}</strong>
          <span>${item.quantity} ks</span>
        </div>
        <strong>${formatPrice(item.price * item.quantity)}</strong>
      `;
      cartItems.appendChild(row);
    });
  }

  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = state.items.reduce((sum, item) => sum + item.quantity, 0);
  cartTotal.textContent = formatPrice(total);
  cartCount.textContent = count;
}

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = Number(button.dataset.price);
    const existing = state.items.find((item) => item.name === name);

    if (existing) {
      existing.quantity += 1;
    } else {
      state.items.push({ name, price, quantity: 1 });
    }

    renderCart();
    openCart();
  });
});

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");

    const selected = filter.dataset.filter;
    products.forEach((product) => {
      const visible = selected === "all" || product.dataset.category === selected;
      product.hidden = !visible;
    });
  });
});

cartTrigger.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cart.addEventListener("click", (event) => {
  if (event.target === cart) closeCart();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealSections.forEach((section) => observer.observe(section));
renderCart();
