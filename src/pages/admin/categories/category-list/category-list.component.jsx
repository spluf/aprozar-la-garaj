import React from 'react';

import './category-list.styles.scss';

const CategoryList = ({categories}) => {
    return (
        <div className='category-list'>
            {
                categories.map(category => <div key={category.id} className='category-item'><span>{category.name}</span>: <span>{category.products.length}</span></div>)
            }
        </div>
    );
}

export default CategoryList;