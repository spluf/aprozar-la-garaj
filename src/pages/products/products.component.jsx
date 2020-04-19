import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CardList from '../../components/card-list/CardList';
import SearchBox from '../../components/search-box/SearchBox';
import CheckoutList from '../../components/checkout-list/checkout-list.component';
import {firestore} from '../../firebase/firebase.utils';
import {updateProductList} from '../../redux/product/product.actions';
import {selectProductList} from '../../redux/product/product.selectors';

import './products.styles.scss';

class ProductsPage extends Component {
    constructor(props){
        super(props);
        console.log('props', props)
        this.state = {
          searchfield: '',
        }
    };
    unsubscribeFromSnapshot = null;

    componentDidMount = () => {
        const collectionRef = firestore.collection('products');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const products = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            this.props.updateProductList(products);
        })
    };

    componentWillUnmount = () => {
        this.unsubscribeFromSnapshot();
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    
    render(){
        const filteredProducts = this.props.products.filter(product => {
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

const mapDispatchToProps = dispatch => ({
    updateProductList: products => dispatch(updateProductList(products))
})

const mapStateToProps = createStructuredSelector({
    products: selectProductList,
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);