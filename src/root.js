import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/DinamicPages/ProductDetail';
import Configurator from './pages/Configurator';
import MyCart from './pages/MyCart';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/products" component={Products} />
      <Route path="/detail" component={ProductDetail} />
      <Route path="/configurator" component={Configurator} />
      <Route path="/mycart" component={MyCart} />
    </BrowserRouter>
  );
};
