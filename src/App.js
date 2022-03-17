import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Auth from './components/Auth';
import Layout from './components/Layout';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Auth /> */}
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
