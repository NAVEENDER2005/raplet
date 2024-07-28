import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>{product.description}</p>
      <p className="font-semibold">Price: ${product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
      </Link>
    </div>
  );
};

export default ProductCard;
