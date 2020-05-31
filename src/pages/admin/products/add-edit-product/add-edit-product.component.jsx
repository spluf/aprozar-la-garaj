import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import FormInput from '../../../../components/form-input/formInput.component';
import FormSelect from '../../../../components/form-select/form-select.component';
import CustomButton from '../../../../components/custom-button/customButton.component';
import {getSelectedProduct} from '../../../../redux/product/product.selectors';
import {updateSelectedProductValues, selectProductToEdit} from '../../../../redux/product/product.actions';

import {addProductDocument} from '../../../../firebase/firebase.utils';

import './add-edit-product.styles.scss';
import { render } from '@testing-library/react';

class AddEditProductComponent extends React.Component {
    handleSubmit = async event => {
      event.preventDefault();
      console.log(this.props)
      const cat = this.props.categories.find(category => category.id === this.props.selectedProduct.category || category.id === this.props.selectedProduct.category?.id);
      this.props.selectedProduct.category = {id: cat.id,name: cat.name};
      this.props.selectedProduct.uom = this.props.uoms.find(uom =>uom.id === this.props.selectedProduct.uom || uom.id === this.props.selectedProduct.uom?.id);
      
      await addProductDocument(this.props.selectedProduct);
    };
    
      handleChange = event => {
        const { value, name } = event.target;
        this.props.updateSelectedProductValues({...this.props.selectedProduct, [name]: value});
      };

      render() {
        console.log(this.props.selectedProduct)
        return (
          <div className='add-edit-product'>
            <span>Adauga sau editeaza un produs</span>
    
            <form onSubmit={this.handleSubmit}>
              <FormInput
                name='name'
                type='text'
                handleChange={this.handleChange}
                value={this.props.selectedProduct.name}
                label='nume'
                required
              />
              <FormInput
                name='imgUrl'
                type='text'
                handleChange={this.handleChange}
                value={this.props.selectedProduct.imgUrl}
                label='adresa imagine'
                required
              />
              <FormInput
                name='price'
                type='number'
                value={parseFloat(this.props.selectedProduct.price)}
                handleChange={this.handleChange}
                label='pret'
                required
              />
              <FormSelect
                name='uom'
                type='select'
                value={this.props.selectedProduct.uom}
                options={this.props.uoms}
                handleChange={this.handleChange}
                label='unitate de masura'
                required
              />
              <FormSelect
                name='category'
                type='text'
                value={this.props.selectedProduct.category}
                options={this.props.categories}
                handleChange={this.handleChange}
                label='categorie'
                required
              />
              <div className='buttons'>
                <CustomButton type='submit'> Salveaza </CustomButton>
              </div>
            </form>
          </div>
        );
      }
}

const mapDispatchToProps = dispatch => ({
  updateSelectedProductValues: selectedProduct => dispatch(updateSelectedProductValues(selectedProduct))
})

const mapStateToProps = createStructuredSelector({
  selectedProduct: getSelectedProduct
})

export default connect(mapStateToProps, mapDispatchToProps)(AddEditProductComponent);