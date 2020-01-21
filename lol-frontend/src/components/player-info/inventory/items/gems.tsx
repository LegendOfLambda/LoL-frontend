import React from 'react';
import { InventoryState } from '../../../../redux/models/inventory-model';

import gem from '../../../../assetts/gem.png';
import '../../info.scss';

interface IProps {
    inventory: InventoryState
}

const Gems = (props: IProps) => {
    return(
        <div>
            <p className='icon-wrap'>
                <img src={gem} alt='gems' className='icons gem' />
                {props.inventory.gems}
            </p>
        </div>
    )
}

export default Gems