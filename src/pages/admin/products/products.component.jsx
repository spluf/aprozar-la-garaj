import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import ProductTable from './product-table/product-table.component';
import SearchBox from '../../../components/search-box/SearchBox';
import AddEditProductComponent from './add-edit-product/add-edit-product.component';

import {firestore, deleteProductDocument} from '../../../firebase/firebase.utils';
import {updateProductList} from '../../../redux/product/product.actions';
import {updateCategoryList} from '../../../redux/category/category.actions';
import {updateUOMList} from '../../../redux/uom/uom.actions';
import {selectProductList} from '../../../redux/product/product.selectors';
import {selectCategoryList} from '../../../redux/category/category.selectors'
import { selectUOMList } from '../../../redux/uom/uom.selectors';

import './products.styles.scss';

class ProductsPage extends Component {
    constructor(props){
        super(props);
        console.log('props', props)
        this.state = {
          searchfield: ''
        }
    };
    unsubscribeFromCategoriesSnapshot = null;
    unsubscribeFromUOMsSnapshot = null;
    unsubscribeFromProductsSnapshot = null;

    componentWillMount = () => {
        const uomsCollectionRef = firestore.collection('uom');

        this.updateCategories();

        this.unsubscribeFromUOMsSnapshot = uomsCollectionRef.onSnapshot(async snapshot => {
            const uoms = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            this.props.updateUOMList(uoms);
        })
    };

    componentWillUnmount = () => {
        this.unsubscribeFromCategoriesSnapshot();
        this.unsubscribeFromUOMsSnapshot();
        this.unsubscribeFromProductsSnapshot();
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    updateCategories = () => {
        const categoriesCollectionRef = firestore.collection('category');
        this.unsubscribeFromCategoriesSnapshot = categoriesCollectionRef.onSnapshot(async snapshot => {
            const categories = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            categories.forEach(cat => {
                this.unsubscribeFromProductsSnapshot = categoriesCollectionRef.doc(cat.id).collection('products').onSnapshot(async snap => {
                    cat.products = snap.docs.map(prod => prod.data())
                });
            })
            this.props.updateCategoryList(categories);
        })
    }

    deleteProduct = (product) => {
        deleteProductDocument(product);
        this.setState({searchfield: ''})
    }
    
    render(){
        const filteredProducts = this.props.categories.map(productList => {
            console.log(productList)
            return {
                name: productList.name,
                products: productList.products.filter(product => {
                    return this.state.searchfield ? product.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(this.state.searchfield.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()) : productList.products
                })
            }
    })

    return(
        <div>
            <SearchBox searchChange={this.onSearchChange} />
            <div className='product-page'>
                <ProductTable productsList={filteredProducts} deleteProduct ={this.deleteProduct}  />
                <AddEditProductComponent categories={this.props.categories} uoms={this.props.uoms} />
            </div>
        </div>
       )
    }
}

const mapDispatchToProps = dispatch => ({
    updateProductList: products => dispatch(updateProductList(products)),
    updateCategoryList: categories => dispatch(updateCategoryList(categories)),
    updateUOMList: uoms => dispatch(updateUOMList(uoms))
})

const mapStateToProps = createStructuredSelector({
    productList: selectProductList,
    categories: selectCategoryList,
    uoms: selectUOMList
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);