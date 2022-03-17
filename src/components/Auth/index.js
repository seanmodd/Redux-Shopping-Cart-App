import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/auth-slice';
import './Auth.css';

const Auth = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit this one is v1.4');
    dispatch(authActions.login());
    console.log('This is isLoggedIn: ', isLoggedIn);
  };

  return (
    <div className="container">
      <h1>Login</h1>{' '}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
