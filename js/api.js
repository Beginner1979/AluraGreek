const apiURL = 'http://localhost:3000/products';

export const getProducts = async () => {
    try {
        const response = await fetch(apiURL);
        if (!response.ok) throw new Error('Error fetching products');
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const addProduct = async (product) => {
    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        if (!response.ok) throw new Error('Error adding product');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

export const deleteProduct = async (id) => {
    try {
        const response = await fetch(`${apiURL}/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Error deleting product');
    } catch (error) {
        console.error(error);
    }
};
