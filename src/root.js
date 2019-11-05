import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/DinamicPages/ProductDetail';
import Configurator from './pages/Configurator';
import MyCart from './pages/MyCart';
import LoginPage from './pages/LoginPage';
import Delivery from './pages/Delivery';
import Administration from './pages/Administration';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/products" component={Products} />
      <Route path="/detail" component={ProductDetail} />
      <Route path="/configurator" component={Configurator} />
      <Route path="/mycart" component={MyCart} />
      <Route path="/login" component={LoginPage} />
      <Route path="/delivery" component={Delivery} />
      <Route path="/administration" component={Administration} />
    </BrowserRouter>
  );
};
