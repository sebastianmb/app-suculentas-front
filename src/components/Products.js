// ProductList.js

import React from 'react';
//Imagen
import suculenta from "../assets/images/example-sucu.jpg"

const ProductList = ({ addToCart, addToQuantity }) => {
    
    const products = [
        { id: 1, name: 'Product 1', price: 10,quantity:0, image: suculenta },
        { id: 2, name: 'Product 2', price: 15,quantity:0, image: suculenta },
        { id: 3, name: 'Product 3', price: 20,quantity:0, image: suculenta },
    ];

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    const handleQuantityChange = (product) => {
        addToQuantity(product)
        
    };

    return (
        <div >
            <h2>Product List</h2>
            <ul className='container-products'>
                {products.map((product) => (
                    <li key={product.id} className='item'>
                        <img src={product.image} alt={product.label} />
                        {product.name} - ${product.price}
                        <input
                            type="number"
                            min="0"
                            value={product.quantity}
                            onChange={(event) => handleQuantityChange(product.id, parseInt(event.target.value))}
                        />
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;