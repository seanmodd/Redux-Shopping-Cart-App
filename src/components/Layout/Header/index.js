import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import Cart from '../Cart';
import './Header.css';
import { authActions } from '../../../store/auth-slice';

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit this one is v1.4');
    dispatch(authActions.logout());
    console.log('This is isLoggedIn status now hopefully false: ', isLoggedIn);
  };

  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: 'monospace', fontSize: '30px' }}
            >
              Redux Shopping App
            </h2>
          </li>
          <form onSubmit={handleSubmit}>
            <button className="logout-btn" type="submit">
              Logout
            </button>
          </form>
          <li>
            <Cart />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
