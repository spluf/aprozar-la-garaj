import React from 'react';

import './uom-list.styles.scss';

const UOMList = ({uoms}) => {
    return (
        <div className='uom-list'>
            {
                uoms.map(uom => <div key={uom.id} className='uom-item'><span>{uom.name}</span></div>)
            }
        </div>
    );
}

export default UOMList;