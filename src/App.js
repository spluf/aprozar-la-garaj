import React, { Component } from 'react';

import Particles from 'react-particles-js';
import particleParams from './particleParams.json'

import 'tachyons';
import './App.css';

import {products} from './products';
import LGNav from './Nav'
import CardList from './CardList'
import SearchBox from './SearchBox';

class App extends Component {
  constructor(){
    super();
    this.state = {
      products: products,
      searchfield: ''
    }
  };

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render(){
    const filteredProducts = this.state.products.filter(product => {
      return product.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(this.state.searchfield.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase())
    })
    return (
      <div className="App">
        <Particles className='particles'
                  params={particleParams} />
        <header id='header' className="App-header">
          <h1>Aprozar la garaj</h1>
          <h2>Iti aducem prospetime pe masa!</h2>
        </header>
        <LGNav />
        <div id='product-list' className="main tc">
            <SearchBox searchChange={this.onSearchChange} />
            <CardList products={filteredProducts} />
        </div>
      </div>
    );
  }
}

export default App;
