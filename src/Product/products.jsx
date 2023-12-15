
import React from 'react';
import Product from './index';
import './index.css';

const ProductsList = ({ products, onAddToCart }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductsList;