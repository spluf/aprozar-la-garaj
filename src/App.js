import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import 'tachyons';
import './App.css';

import Nav from './components/nav/Nav'
import HomePage from './pages/homepage/homepage.component';
import ProductsPage from './pages/products/products.component'

const App = () => (
  <div className="App">
    <Nav />
    <Switch>
      <Route exact path='/aprozar-la-garaj/' component={HomePage} />
      <Route exact path='/aprozar-la-garaj/products' component={ProductsPage} />
    </Switch>
  </div>
)

export default App;
