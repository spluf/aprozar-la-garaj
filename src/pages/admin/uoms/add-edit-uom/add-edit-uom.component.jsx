import React from 'react';
import {connect} from 'react-redux';

import FormInput from '../../../../components/form-input/formInput.component';
import CustomButton from '../../../../components/custom-button/customButton.component';

import {addUOMDocument} from '../../../../firebase/firebase.utils';
import {addUOM} from '../../../../redux/uom/uom.actions';

import './add-edit-uom.styles.scss';

class AddEditUOMComponent extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {name} = this.state;

        await addUOMDocument({name});
        
        this.props.addUOM({name});

        this.setState({name: ''})
      };
    
      handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
      };

      render() {
        return (
          <div className='add-edit-product'>
            <span>Adauga o unitate de masura noua</span>
    
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
  addUOM: uom => dispatch(addUOM(uom))
})

export default connect(null, mapDispatchToProps)(AddEditUOMComponent);