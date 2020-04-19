import React from 'react';

import './admin-menu.styles.scss';

const AdminMenu = () => {
    return(
        <div class="vertical-menu">
            <a href="#" class="active">Produse</a>
            <a href="#">Categorii</a>
            <a href="#">Unitati de masura</a>
            <a href="#">Comenzi</a>
        </div> 
    )
}

export default AdminMenu;