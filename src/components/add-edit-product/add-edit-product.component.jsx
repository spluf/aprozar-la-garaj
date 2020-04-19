import React from 'react';

import FormInput from '../form-input/formInput.component';
import FormSelect from '../form-select/form-select.component';
import CustomButton from '../custom-button/customButton.component';

import './add-edit-product.styles.scss';

class AddEditProductComponent extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: '',
          price: 0,
          uom: '',
          category: '',
          imgUrl: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
      };
    
      handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
      };

      render() {
        return (
          <div className='add-edit-product'>
            <span>Adauga sau editeaza un produs</span>
    
            <form onSubmit={this.handleSubmit}>
              <FormInput
                name='name'
                type='text'
                handleChange={this.handleChange}
                value={this.state.name}
                label='nume'
                required
              />
              <FormInput
                name='imgUrl'
                type='text'
                handleChange={this.handleChange}
                value={this.state.imgUrl}
                label='adresa imagine'
                required
              />
              <FormInput
                name='price'
                type='number'
                value={this.state.price}
                handleChange={this.handleChange}
                label='pret'
                required
              />
              <FormSelect
                name='uom'
                type='select'
                value={this.state.uom}
                handleChange={this.handleChange}
                label='unitate de masura'
                required
              />
              <FormSelect
                name='category'
                type='text'
                value={this.state.category}
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

export default AddEditProductComponent;