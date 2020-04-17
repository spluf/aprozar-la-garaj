import React from 'react';
import { Component } from 'react';

import {products} from './products';
import CardList from '../../components/card-list/CardList';
import SearchBox from '../../components/search-box/SearchBox';
import CheckoutList from '../../components/checkout-list/checkout-list.component';

import './products.styles.scss';

class ProductsPage extends Component {
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
        <div className='main product-page'>
           <div className='shop-list'>
                <SearchBox searchChange={this.onSearchChange} />
                <div className='checkout-list'>
                    <CheckoutList />
                </div>
            </div>
            <div className='product-list'>
                    <CardList products={filteredProducts} />
            </div>
        </div>
       )
    }
}

export default ProductsPage;