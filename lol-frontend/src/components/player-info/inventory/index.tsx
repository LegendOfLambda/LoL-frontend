import React, { useState, useEffect } from 'react';

import { InventoryState } from '../../../redux/models/inventory-model';

import '../info.scss';
import Gems from './items/gems';

interface IProps {
    inventory: InventoryState
}

const Inventory = (props: IProps) => {
    const [totalSlots, setTotalSlots] = useState();

    useEffect(() => {
        setTotalSlots(new Array(props.inventory.max_slots).fill(0));
    }, [props.inventory.max_slots])

    return (
        <div className='inventory-wrap'>
            <Gems inventory={props.inventory} />
            <div className='slots-wrap'>
                {totalSlots &&
                totalSlots.map((item:number, index:number) => {
                    return(
                        <div key={index} className='inv-slot'></div>
                    )
                })}
            </div>
        </div>
    )
}

export default Inventory