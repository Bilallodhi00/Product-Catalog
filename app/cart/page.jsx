// app/cart/page.js
"use client"; 
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id} className="border p-4 mb-4 flex justify-between">
              <span>{product.title}</span>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
