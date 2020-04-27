import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CardList from '../../components/card-list/CardList';
import SearchBox from '../../components/search-box/SearchBox';
import CheckoutList from '../../components/checkout-list/checkout-list.component';
import {firestore} from '../../firebase/firebase.utils';
import {updateCategoryList} from '../../redux/category/category.actions';
import {selectCategoryList} from '../../redux/category/category.selectors';

import './products.styles.scss';

class ProductsPage extends Component {
    constructor(props){
        super(props);
        this.state = {
          searchfield: '',
        }
    };
    unsubscribeFromSnapshot = null;

    componentDidMount = () => {
        const collectionRef = firestore.collection('category');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const categories = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            this.props.updateCategoryList(categories);
        })
    };

    componentWillUnmount = () => {
        this.unsubscribeFromSnapshot();
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    
    render(){
        const filteredProducts = this.props.categories.map(productList => {
            console.log(productList)
            return {
                name: productList.name,
                products: productList.products.filter(product => {
                    return product.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(this.state.searchfield.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase())
                })
            }
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
                    <CardList productsList={filteredProducts} />
            </div>
        </div>
       )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCategoryList: products => dispatch(updateCategoryList(products))
})

const mapStateToProps = createStructuredSelector({
    categories: selectCategoryList,
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);