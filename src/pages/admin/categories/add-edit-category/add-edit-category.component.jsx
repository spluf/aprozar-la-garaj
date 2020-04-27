import React from 'react';
import {connect} from 'react-redux';

import FormInput from '../../../../components/form-input/formInput.component';
import CustomButton from '../../../../components/custom-button/customButton.component';

import {addCategoryDocument} from '../../../../firebase/firebase.utils';
import {addCategory} from '../../../../redux/category/category.actions';

import './add-edit-category.styles.scss';

class AddEditCategoryComponent extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {name} = this.state;

        await addCategoryDocument({name});

        this.props.addCategory({name});

        this.setState({name: ''})
      };
    
      handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
      };

      render() {
        return (
          <div className='add-edit-product'>
            <span>Adauga o categorie noua</span>
    
            <form onSubmit={this.handleSubmit}>
              <FormInput
                name='name'
                type='text'
                handleChange={this.handleChange}
                value={this.state.name}
                label='nume'
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
  addCategory: category => dispatch(addCategory(category))
})

export default connect(null, mapDispatchToProps)(AddEditCategoryComponent);