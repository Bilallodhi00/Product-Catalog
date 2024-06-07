"use client"; // Mark as client component

import { useCart } from '../../context/CartContext';

const AddToCartButton = ({ product, showText }) => {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-grey text-white p-2 mt-4 rounded-full hover:bg-gray-600 flex items-center"
    >
      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
      {showText && <span className="ml-2">Add to cart</span>}
    </button>
  );
};

export default AddToCartButton;
