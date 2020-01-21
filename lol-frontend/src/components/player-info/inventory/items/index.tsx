import React from 'react';
import { InventoryState } from '../../../../redux/models/inventory-model';

import gem from '../../../../assetts/gem.png';
import '../../info.scss';

interface IProps {
    inventory: InventoryState
}

const Items = (props: IProps) => {
    return(
        <div>
            <p className='icon-wrap'>
                <img src={gem} alt='gems' className='icons' />
                {props.inventory.gems}
            </p>
        </div>
    )
}

export default Items