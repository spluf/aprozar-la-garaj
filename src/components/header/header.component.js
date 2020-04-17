import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {ReactComponent as Logo} from '../../assets/basket.svg';

import './header.styles.scss';

const Header = ({currentUser, hidden}) => {

    return (
        <div className='header'>
            <div class='logo-container'>
            <Link className="navigation-link" to='/aprozar-la-garaj/'>
                <Logo />
            </Link>
                
            </div>
            <nav className="navigation">                
                
                <Link className="navigation-link" to='/aprozar-la-garaj/products'>Produse</Link>
                <Link className="navigation-link" to='/aprozar-la-garaj/contact'>Contact</Link>
                {
                    currentUser ? 
                    <div className='navigation-link' onClick={() => auth.signOut()}>Iesi</div>
                    :
                    <Link className="navigation-link" to='/aprozar-la-garaj/signin'>Intra</Link>
                }
                <CartIcon />
            </nav>
            {
                hidden ? null : <CartDropdown />
            }
        </div>
    )
}

const mapStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header)