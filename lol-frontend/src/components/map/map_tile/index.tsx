import React from 'react';
import { SPRITE_WIDTH } from '../../../constants';

interface IProps {
    value: number
}

const MapTile = (props: IProps) => {
    const getTileSprite = (type: number): string => {
        switch(type) {
            case 0:
                return 'path'

            case 1:
                return 'wall'

            case 2:
                return 'nothing'

            default:
                return 'nothing'
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