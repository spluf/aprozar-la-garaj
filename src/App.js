import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import 'tachyons';
import './App.scss';

import Nav from './components/nav/Nav'
import HomePage from './pages/homepage/homepage.component';
import ProductsPage from './pages/products/products.component'
import LoginRegisterPage from './pages/login-register/login-register.component';
import ContactPage from './pages/contact/contact.component';
import {auth} from './firebase/firebase.utils';


class App extends Component {
  constructor(){
    super();
    
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return(
      <div className="App">
        <Nav currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/aprozar-la-garaj/' component={HomePage} />
          <Route exact path='/aprozar-la-garaj/products' component={ProductsPage} />
          <Route exact path='/aprozar-la-garaj/contact' component={ContactPage} />
          <Route exact path='/aprozar-la-garaj/signin' component={LoginRegisterPage} />
        </Switch>
      </div>
    )
  }
}

export default App;
