import React from 'react';
import {connect} from 'react-redux';

import {selectProductToEdit} from '../../../../redux/product/product.actions';
import {deleteProduct} from '../../../../redux/product/product.actions';

import './product-table.styles.scss';

class ProductTable extends React.Component {
    onProductSelected = (product) => {
        this.props.selectProductToEdit(product);
    }

    onProductDeleted = (product) => {
        this.props.deleteProduct(product);
    }
    
    render() {
        return (
            <div className='product-table'>
                {
                    this.props.productsList.map(productList => {
                        if(productList.products.length > 0){
                            return(
                                <div key={productList.name} className='product-list-area'>
                                    <h2>{productList.name}</h2>
                                    <hr />
                                    {
                                        productList.products.map(product => (
                                            <div className='product-item' key={product.id}>
                                                <div className='image-container'>
                                                    <img src={product.imgUrl} alt='item'/>
                                                </div>
                                                <span className='name'>{product.name}</span>
                                                <span className='price'>{product.price} RON</span>
                                                <button onClick={() => this.onProductSelected(product)}>Editeaza</button>
                                                <button onClick={() => this.onProductDeleted(product)}>Sterge</button>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                    })
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    selectProductToEdit: product => dispatch(selectProductToEdit(product))
})

export default connect(null, mapDispatchToProps)(ProductTable);