import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import Layout from './components/Layout';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log('isLoggedIn', isLoggedIn);

  return <div className="App">{isLoggedIn ? <Layout /> : <Auth />}</div>;
}

export default App;
