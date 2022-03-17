import React from 'react';
import Header from './Header';
import Products from './Products';
import './Layout.css';

const Layout = () => {
  const total = 100;

  return (
    <div className="layout">
      <Header />
      <Products />
      <div className="total-price">
        <h3>Total: ${total}</h3>
        <button className="orderBtn" type="submit">
          Place Order
        </button>
      </div>{' '}
    </div>
  );
};

export default Layout;
