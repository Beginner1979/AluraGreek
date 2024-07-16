import { addProduct } from './api.js';

const productForm = document.getElementById('product-form');

productForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = e.target.nombre.value;
    const precio = e.target.precio.value;
    const imagen = URL.createObjectURL(e.target.imagen.files[0]);

    const newProduct = { nombre, precio, imagen };

    await addProduct(newProduct);
    e.target.reset();
    window.location.reload();
});
