import React from 'react';
import './index.css';

const ProductCard = ({ product, onAddToCart }) => {
  return (


    <div className="product">
      
        {product.offer && <span className="product-tagline">{product.offer}</span>}


        <div className="product-brand">{product.brand}</div>
        <h3 className="product-name">{product.name}</h3>
        <img src={product.img} alt={product.name} className="product-image" />

        <div className="product-price">Starting from</div>
        <div className="product-price-amount">BD {product.price} /mo</div>

        <button onClick={() => onAddToCart(product)} className="product-cta">{product.cta}</button>
      </div>

 
  );
};

export default ProductCard;
