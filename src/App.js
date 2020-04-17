import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.scss';

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component';
import ProductsPage from './pages/products/products.component'
import LoginRegisterPage from './pages/login-register/login-register.component';
import ContactPage from './pages/contact/contact.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });

          console.log(this.state);
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return(
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/aprozar-la-garaj/' component={HomePage} />
          <Route exact path='/aprozar-la-garaj/products' component={ProductsPage} />
          <Route exact path='/aprozar-la-garaj/contact' component={ContactPage} />
          <Route exact path='/aprozar-la-garaj/signin' render={() => this.props.currentUser ? (<Redirect to='/aprozar-la-garaj/' />) : (<LoginRegisterPage />)} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
