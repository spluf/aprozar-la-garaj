
import React from 'react';

import FormInput from '../form-input/formInput.component';
import CustomButton from '../custom-button/customButton.component';

import {signInWithGoogle, auth} from '../../firebase/firebase.utils';

import './signin.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {email, password} = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' });
    }
    catch(error){
      console.log(error);
    }
    
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>Am deja un cont</h2>
        <span>Intra cu email si parola sau cu contul google</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='parola'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Intra </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> GOOGLE</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;