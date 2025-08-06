const apiUrl = './products.json';
const productsContainer = document.getElementById('productsGrid');
const categorySelect = document.getElementById('categoryFilter');
const modal = document.getElementById('productModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

let allProducts = [];

// Fetch products from local JSON file
async function fetchProducts() {
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        allProducts = data;
        renderCategories();
        renderProducts(allProducts);
    } catch (err) {
        console.error('Error loading products:', err);
    }
}

// Render unique categories in dropdown
function renderCategories() {
    categorySelect.innerHTML = '<option value="">All Categories</option>'; // Clear and add "All"

    const categories = [...new Set(allProducts.map(p => p.category))];

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize
        categorySelect.appendChild(option);
    });
}

// Render product cards
function renderProducts(products) {
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card cursor-pointer border p-4 rounded shadow hover:shadow-lg transition';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-contain mb-2" />
            <h3 class="font-semibold text-lg mb-1">${product.title}</h3>
            <p class="text-green-600 font-bold">$${product.price}</p>
        `;
        card.addEventListener('click', () => openModal(product));
        productsContainer.appendChild(card);
    });
}

// Open modal with product details
function openModal(product) {
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
    <h2 class="text-2xl font-bold mb-4">${product.title}</h2>
    <img src="${product.image}" alt="${product.title}" class="w-full h-64 object-contain mb-4" />
    <p><strong>Price:</strong> $${product.price}</p>
    <p class="mt-2"><strong>Description:</strong> ${product.description}</p>
  `;
    modal.style.display = 'flex';
}

// Close modal on button click
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside content
window.addEventListener('click', e => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Filter products by selected category
categorySelect.addEventListener('change', () => {
    const selected = categorySelect.value;

    if (selected === '') {
        renderProducts(allProducts); // Show all products
    } else {
        const filtered = allProducts.filter(p => p.category === selected);
        renderProducts(filtered);
    }
});

// Start fetching products on page load
fetchProducts();
