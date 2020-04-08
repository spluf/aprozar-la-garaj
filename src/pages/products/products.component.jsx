import React from 'react';
import { Component } from 'react';

import {products} from './products';
import CardList from '../../components/card-list/CardList'
import SearchBox from '../../components/search-box/SearchBox';

import './products.styles.scss';

class Products extends Component {
    constructor(){
        super();
        this.state = {
          products: products,
          searchfield: '',
        }
    };

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    
    render(){
        const filteredProducts = this.state.products.filter(product => {
          return product.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(this.state.searchfield.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase())
    })

    return(
        <div className='main cf w-100'>
           <div className='fl no-underline w-100 w-100-m w-50-ns '>
                <SearchBox searchChange={this.onSearchChange} />
            </div>
            <div className='fl no-underline w-100 w-100-m w-50-ns '>
                <div className=" tc">
                    <CardList products={filteredProducts} />
                </div>
            </div>
        </div>
       )
    }
}

export default Products;