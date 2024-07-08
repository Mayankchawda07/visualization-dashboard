import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../src/Pages/Login';
import Dashboard from '../src/Pages/Dashboard';
import Product from './Pages/Product';
import Customer from './Pages/Customer';
import Order from './Pages/Order';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/learnfrontend/'>
      <Routes>
        <Route element={<App />} >
          <Route index path='/' element={<Dashboard />} />
          <Route index path='/product' element={<Product />} />
          <Route index path='/customer' element={<Customer />} />
          <Route index path='/order' element={<Order />} />


        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
