import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { cartActions } from '../../../store/cart-slice';

import './Product.css';

const Product = ({ name, id, imgURL, price }) => {
  const itemsList = useSelector((state) => state.cart.itemsList);
  const dispatch = useDispatch();
  console.log('This is the itemsList: ', itemsList);
  const addToCart = (e) => {
    dispatch(
      cartActions.addToCart({
        name,
        id,
        price,
      })
    );
  };
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart} type="submit">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
