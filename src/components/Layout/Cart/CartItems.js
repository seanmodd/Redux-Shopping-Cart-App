import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './Cart.css';

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        <li>
          <CartItem id={1} price={2500} name="Macbook" />
        </li>
        {cartItems.map((item) => (
          <li key={item.id}>
            <CartItem id={item.id} price={item.price} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
