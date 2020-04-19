import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import ProductTable from '../../components/product-table/product-table.component';
import SearchBox from '../../components/search-box/SearchBox';
import AddEditProductComponent from '../../components/add-edit-product/add-edit-product.component';
import AdminMenu from '../../components/admin-menu/admin-menu.component';

import {firestore} from '../../firebase/firebase.utils';
import {updateProductList} from '../../redux/product/product.actions';
import {selectProductList} from '../../redux/product/product.selectors';

import './admin.styles.scss';

class AdminPage extends Component {
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
        <div className='main'>
            <div className='admin-page'>
                <div className='admin-menu'>
                    <AdminMenu />
                </div>
                <div className='admin-content'>
                    <SearchBox searchChange={this.onSearchChange} />
                    <div className='product-page'>
                        <ProductTable products={filteredProducts} />
                        <AddEditProductComponent />
                    </div>
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);