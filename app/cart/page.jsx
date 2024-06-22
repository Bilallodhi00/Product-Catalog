"use client"; 
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="bg-gradient-to-b from-[#827191] to-black min-h-screen flex flex-col items-center">
      <div className="container mx-auto p-4 mt-16">
        <h1 className="text-2xl font-bold mb-4 text-white text-center">Cart</h1>
        {cart.length === 0 ? (
          <p className="text-white text-center">Your cart is empty.</p>
        ) : (
          <ul className="w-full max-w-md mx-auto">
            {cart.map((product) => (
              <li key={product.id} className="border border-white p-4 mb-4 flex justify-between items-center bg-white rounded-lg shadow-md">
                <span className="text-[#000]">{product.title}</span>
                <button 
                  onClick={() => removeFromCart(product.id)}
                  className="p-2 text-sm font-medium text-white bg-gray-700 rounded-lg border border-gray-700 hover:bg-gray-600 focus:outline-none"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
