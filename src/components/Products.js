import React, { useState } from 'react';
import suculenta from "../assets/images/example-sucu.jpg"

const ProductList = ({ addToCart }) => {
    const [selectedProducts, setSelectedProducts] = useState({});

    const products = [
        { id: 1, name: 'Product 1', price: 10, quantity: 0, image: suculenta },
        { id: 2, name: 'Product 2', price: 15, quantity: 0, image: suculenta },
        { id: 3, name: 'Product 3', price: 20, quantity: 0, image: suculenta },
        { id: 4, name: 'Product 1', price: 10, quantity: 0, image: suculenta },     
        { id: 5, name: 'Product 2', price: 15, quantity: 0, image: suculenta },
        { id: 6, name: 'Product 3', price: 20, quantity: 0, image: suculenta },
        
    ];

    const handleQuantityChange = (productId, quantity) => {
        setSelectedProducts((prevSelectedProducts) => ({
            ...prevSelectedProducts,
            [productId]: quantity,
        }));
    };

    const handleAddToCart = (product) => {
        const quantity = selectedProducts[product.id] || 0;
        addToCart({ ...product, quantity });
        setSelectedProducts((prevSelectedProducts) => ({
            ...prevSelectedProducts,
            [product.id]: 0,
        }));
    };

    return (
        <div>
            
            <ul className='container-products'>
                {products.map((product) => (
                    <li key={product.id} className='item'>
                        <img src={product.image} alt={product.label} />
                        {product.name} - ${product.price}
                        <input
                            type="number"
                            min="0"
                            value={selectedProducts[product.id] || 0}
                            onChange={(event) =>
                                handleQuantityChange(product.id, parseInt(event.target.value))
                            }
                        />
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;