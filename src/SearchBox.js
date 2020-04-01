import React from 'react'

export default function SearchBox({searchfield, searchChange}) {
    return (
        <div className='pa2'>
            <input 
                className='ma3 pa3 ba shadow-3 bradius w75'
                type='search' 
                onChange={searchChange}
                placeholder='Cauta produs' />
        </div>
    )
}
