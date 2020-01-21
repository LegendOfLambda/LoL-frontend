import React from 'react';
import { SPRITE_WIDTH } from '../../../constants';

interface IProps {
    value: number
}

const MapTile = (props: IProps) => {
    const getTileSprite = (type: number): string => {
        switch(type) {
            case 5:
                return 'rock'
            case 6:
                return 'tree'
            default:
                return 'grass'
        }
    }

    return(
        <div
            className={`tile ${getTileSprite(props.value)}`}
            style={{
                width: SPRITE_WIDTH,
            }}>
        </div>
    )
}

export default MapTile