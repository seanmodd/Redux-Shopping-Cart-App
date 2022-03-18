import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { cartActions } from '../../../store/cart-slice';

import './Cart.css';

const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);
  const handleClick = (e) => {
    e.preventDefault();
    console.log('submit this one is v1.4');
    dispatch(cartActions.setShowCart());
    console.log('This is showCart status now hopefully false: ', showCart);
  };
  return (
    <button onClick={handleClick} className="cartIcon">
      {showCart ? <h4>Click to show cart</h4> : <h4>Click to hide cart</h4>}
      <h3>Cart: {quantity} Items</h3>
    </button>
  );
};

export default Cart;
