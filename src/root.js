import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './pages/Home/Home';
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Configurator from './pages/Configurator/Configurator';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/products" component={Products} />
      <Route path="/detail" component={ProductDetail} />
      <Route path="/configurator" component={Configurator} />
    </BrowserRouter>
  );
};
