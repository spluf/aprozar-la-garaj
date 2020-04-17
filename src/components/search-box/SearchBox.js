import React from 'react';

import './searchbox.styles.scss';

export default function SearchBox({searchfield, searchChange}) {
    return (
        <div className='search-box'>
            <input 
                className='search-field'
                type='search' 
                onChange={searchChange}
                placeholder='Cauta produs' />
        </div>
    )
}
