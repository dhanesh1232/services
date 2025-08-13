// Product Data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80",
    description:
      "Track your fitness, receive notifications, and monitor your health with this stylish smartwatch.",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1458&q=80",
    description:
      "Portable Bluetooth speaker with 20W output and 15-hour playtime.",
  },
  {
    id: 4,
    name: "Laptop Backpack",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description:
      "Durable and stylish backpack with padded laptop compartment and multiple pockets.",
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    description:
      "True wireless earbuds with premium sound quality and touch controls.",
  },
  {
    id: 6,
    name: "Fitness Tracker",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Track your steps, heart rate, sleep, and more with this comfortable fitness band.",
  },
  {
    id: 7,
    name: "Portable Charger",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1489&q=80",
    description:
      "10000mAh power bank with dual USB ports for charging multiple devices.",
  },
  {
    id: 8,
    name: "Desk Lamp",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Adjustable LED desk lamp with multiple brightness levels and color temperatures.",
  },
  {
    id: 9,
    name: "Denim Jacket",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3",
    description:
      "Classic denim jacket with modern fit and premium quality material.",
  },
  {
    id: 10,
    name: "Smart TV",
    price: 699.99,
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3",
    description: "55-inch 4K Smart TV with HDR and built-in streaming apps.",
  },
  {
    id: 11,
    name: "Running Shoes",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3",
    description:
      "Lightweight running shoes with superior cushioning and support.",
  },
  {
    id: 12,
    name: "Gaming Console",
    price: 499.99,
    image:
      "https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixlib=rb-4.0.3",
    description: "Next-gen gaming console with 4K graphics and 1TB storage.",
  },
  {
    id: 13,
    name: "Leather Wallet",
    price: 44.99,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3",
    description: "Genuine leather wallet with RFID blocking technology.",
  },
  {
    id: 14,
    name: "Wireless Keyboard",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3",
    description:
      "Ergonomic wireless keyboard with backlit keys and long battery life.",
  },
  {
    id: 15,
    name: "Casual Shirt",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3",
    description: "Comfortable cotton casual shirt perfect for everyday wear.",
  },
  {
    id: 16,
    name: "Digital Camera",
    price: 599.99,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3",
    description: "24MP digital camera with 4K video recording capabilities.",
  },
  {
    id: 17,
    name: "Mechanical Keyboard",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-4.0.3",
    description:
      "Premium mechanical keyboard with RGB backlighting and Cherry MX switches.",
  },
  {
    id: 18,
    name: "Wireless Mouse",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3",
    description:
      "Ergonomic wireless mouse with adjustable DPI and silent clicks.",
  },
  {
    id: 19,
    name: "Smart Home Hub",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1558089687-f282ffcbc126?ixlib=rb-4.0.3",
    description:
      "Central hub for controlling all your smart home devices with voice commands.",
  },
  {
    id: 20,
    name: "Yoga Mat",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?ixlib=rb-4.0.3",
    description:
      "Non-slip yoga mat with carrying strap, perfect for home workouts.",
  },
];

// Shopping Cart
let cart = [];

// DOM Elements
const productGrid = document.getElementById("product-grid");
const cartButton = document.getElementById("cart-button");
const mobileCartButton = document.getElementById("mobile-cart-button");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");
const emptyCartMessage = document.getElementById("empty-cart-message");
const cartSummary = document.getElementById("cart-summary");
const cartSubtotal = document.getElementById("cart-subtotal");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const mobileCartCount = document.getElementById("mobile-cart-count");
const checkoutButton = document.getElementById("checkout-button");
const checkoutModal = document.getElementById("checkout-modal");
const closeCheckout = document.getElementById("close-checkout");
const checkoutItems = document.getElementById("checkout-items");
const paymentForm = document.getElementById("payment-form");
const paymentSuccess = document.getElementById("payment-success");
const continueShopping = document.getElementById("continue-shopping");
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const mainNav = document.getElementById("main-nav");

// Display Products
function displayProducts() {
  productGrid.innerHTML = "";
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className =
      "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300";
    productCard.innerHTML = `
                    <div class="relative">
                        <img src="${product.image}" alt="${
      product.name
    }" class="w-full h-48 object-cover">
                        <button class="absolute top-2 right-2 p-2 outline-none ring-0 cursor-pointer" onclick="addToCart(${
                          product.id
                        })">
                            <i class="fas fa-shopping-cart text-blue-600"></i>
                        </button>
                    </div>
                    <div class="p-4">
                        <h3 class="font-bold text-lg mb-1">${product.name}</h3>
                        <p class="text-gray-600 text-sm mb-2">${
                          product.description
                        }</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-blue-600">$${product.price.toFixed(
                              2
                            )}</span>
                            <button onclick="addToCart(${
                              product.id
                            })" class="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                `;
    productGrid.appendChild(productCard);
  });
}

// Add to Cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  updateCart();
  showCartNotification();
}

// Show Cart Notification
function showCartNotification() {
  const notification = document.createElement("div");
  notification.className =
    "fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center";
  notification.innerHTML = `
                <i class="fas fa-check-circle mr-2"></i>
                <span>Item added to cart</span>
            `;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add(
      "opacity-0",
      "transition-opacity",
      "duration-300"
    );
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 2000);
}

// Update Cart
function updateCart() {
  // Update cart count
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = totalItems;
  mobileCartCount.textContent = totalItems;

  // Update cart items
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    emptyCartMessage.classList.remove("hidden");
    cartSummary.classList.add("hidden");
  } else {
    emptyCartMessage.classList.add("hidden");
    cartSummary.classList.remove("hidden");

    let subtotal = 0;

    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.className =
        "flex items-center mb-4 pb-4 border-b border-gray-200";
      cartItem.innerHTML = `
                        <img src="${item.image}" alt="${
        item.name
      }" class="w-16 h-16 object-cover rounded-lg mr-4">
                        <div class="flex-grow">
                            <h3 class="font-bold">${item.name}</h3>
                            <p class="text-gray-600 text-sm">$${item.price.toFixed(
                              2
                            )} x ${item.quantity}</p>
                        </div>
                        <div class="flex items-center">
                            <button onclick="updateCartItem(${
                              item.id
                            }, -1)" class="text-gray-500 hover:text-blue-600 p-1">
                                <i class="fas fa-minus text-xs"></i>
                            </button>
                            <span class="mx-2">${item.quantity}</span>
                            <button onclick="updateCartItem(${
                              item.id
                            }, 1)" class="text-gray-500 hover:text-blue-600 p-1">
                                <i class="fas fa-plus text-xs"></i>
                            </button>
                            <button onclick="removeFromCart(${
                              item.id
                            })" class="text-red-500 hover:text-red-700 ml-4 p-1">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    `;
      cartItems.appendChild(cartItem);

      subtotal += item.price * item.quantity;
    });

    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    cartTotal.textContent = `$${subtotal.toFixed(2)}`;

    // Update checkout items
    checkoutItems.innerHTML = "";
    cart.forEach((item) => {
      const checkoutItem = document.createElement("div");
      checkoutItem.className =
        "flex items-center mb-4 pb-4 border-b border-gray-200";
      checkoutItem.innerHTML = `
                        <img src="${item.image}" alt="${
        item.name
      }" class="w-16 h-16 object-cover rounded-lg mr-4">
                        <div class="flex-grow">
                            <h3 class="font-bold">${item.name}</h3>
                            <p class="text-gray-600 text-sm">$${item.price.toFixed(
                              2
                            )} x ${item.quantity}</p>
                        </div>
                        <span class="font-bold">$${(
                          item.price * item.quantity
                        ).toFixed(2)}</span>
                    `;
      checkoutItems.appendChild(checkoutItem);
    });
  }
}

// Update Cart Item Quantity
function updateCartItem(productId, change) {
  const item = cart.find((item) => item.id === productId);

  if (item) {
    item.quantity += change;

    if (item.quantity <= 0) {
      cart = cart.filter((item) => item.id !== productId);
    }

    updateCart();
  }
}

// Remove from Cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCart();
}

// Event Listeners
cartButton.addEventListener("click", () => {
  cartModal.classList.remove("hidden");
});

mobileCartButton.addEventListener("click", () => {
  cartModal.classList.remove("hidden");
  mobileMenu.classList.add("hidden");
});

closeCart.addEventListener("click", () => {
  cartModal.classList.add("hidden");
});

checkoutButton.addEventListener("click", () => {
  cartModal.classList.add("hidden");
  checkoutModal.classList.remove("hidden");
});

closeCheckout.addEventListener("click", () => {
  checkoutModal.classList.add("hidden");
});

paymentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  paymentForm.classList.add("hidden");
  paymentSuccess.classList.remove("hidden");
});

continueShopping.addEventListener("click", () => {
  checkoutModal.classList.add("hidden");
  cart = [];
  updateCart();
  paymentForm.classList.remove("hidden");
  paymentSuccess.classList.add("hidden");
});

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close modals when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === cartModal) {
    cartModal.classList.add("hidden");
  }
  if (e.target === checkoutModal) {
    checkoutModal.classList.add("hidden");
  }
});

// Initialize
displayProducts();
updateCart();
