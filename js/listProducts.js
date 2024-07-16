
import { getProducts, deleteProduct } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
    const productsListSection = document.querySelector('.products-list');
    const noProductsSection = document.querySelector('.no-products');

    const products = await getProducts();

    if (products.length === 0) {
        noProductsSection.style.display = 'block';
        productsListSection.style.display = 'none';
    } else {
        noProductsSection.style.display = 'none';
        productsListSection.style.display = 'grid';

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <h2>${product.nombre}</h2>
                <p>Precio: $${product.precio}</p>
                <img src="${product.imagen}" alt="${product.nombre}">
                <img src="img/trash.png" data-id="${product.id}" class="delete-icon" alt="Eliminar">
            `;
            productsListSection.appendChild(productCard);
        });

        productsListSection.addEventListener('click', async (e) => {
            if (e.target.classList.contains('delete-icon')) {
                const productId = e.target.dataset.id;
                await deleteProduct(productId);
                e.target.parentElement.remove();
                if (productsListSection.children.length === 0) {
                    noProductsSection.style.display = 'block';
                }
            }
        });
    }
});
