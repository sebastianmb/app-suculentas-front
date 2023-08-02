import React, { useState,useContext } from 'react';
//import suculenta from "../assets/images/example-sucu.jpg"
import { dataContext } from './context/DataContext';




const ProductList = ({ addToCart,category }) => {
    const [selectedProducts, setSelectedProducts] = useState({});


    const {data}= useContext(dataContext);

    

    

    const handleQuantityChange = (productId, quantity) => {
        setSelectedProducts((prevSelectedProducts) => ({
            ...prevSelectedProducts,
            [productId]: quantity,
        }));
    };

    const handleAddToCart = (product) => {
        console.log({data});
        const quantity = selectedProducts[product.id] || 0;
        addToCart({ ...product, quantity });
        setSelectedProducts((prevSelectedProducts) => ({
            ...prevSelectedProducts,
            [product.id]: 0,

        
        }));
    };

    // Filtramos solo los productos de la categoría especificada
  const filteredProducts = data.filter(product => product.category === category);

    return (
        <div>
            
            
            <ul className='container-products'>
                {filteredProducts.map((product) => (
                    <li key={product.id} className='item'>
                        <img src={product.image} alt={product.label} />
                        {product.name}
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