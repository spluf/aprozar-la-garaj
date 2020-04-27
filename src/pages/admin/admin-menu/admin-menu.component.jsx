import React from 'react';
import { Link } from 'react-router-dom';

import './admin-menu.styles.scss';

const AdminMenu = () => {
    return(
        <div className="vertical-menu">
            <Link className="navigation-link" to='/aprozar-la-garaj/admin'>Produse</Link>
            <Link className="navigation-link" to='/aprozar-la-garaj/admin/categories'>Categorii</Link>
            <Link className="navigation-link" to='/aprozar-la-garaj/admin/uoms'>Unitati de masura</Link>
            <Link className="navigation-link" to='/aprozar-la-garaj/admin/orders'>Comenzi</Link>
        </div> 
    )
}

export default AdminMenu;