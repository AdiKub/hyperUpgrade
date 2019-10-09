import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './pages/Home/Home.js';
import Products from './pages/Products/Products.js';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/products" component={Products} />
    </BrowserRouter>
  );
};
