import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({currentUser, hidden}) => {

    return (
        <div className='header'>
            <nav className="navigation">                
                <Link className="navigation-link" to='/aprozar-la-garaj/'>Home</Link>
                <Link className="navigation-link" to='/aprozar-la-garaj/products'>Produse</Link>
                <Link className="navigation-link" to='/aprozar-la-garaj/contact'>Contact</Link>
                {
                    currentUser ? 
                    <div className='navigation-link' onClick={() => auth.signOut()}>Sign Out</div>
                    :
                    <Link className="navigation-link" to='/aprozar-la-garaj/signin'>Sign In</Link>
                }
                <CartIcon />
            </nav>
            {
                hidden ? null : <CartDropdown />
            }
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header)