import React from 'react';

import '../map.scss';
import MapTile from '../map_tile';

import {
    MAP_TRUE_WIDTH,
    SPRITE_HEIGHT
} from '../../../constants';

interface IProps {
    tiles: Array<number>
}

const MapRow = (props: IProps) => {
    return (
        <div
            className='row'
            style={{
                width: MAP_TRUE_WIDTH,
                height: SPRITE_HEIGHT
            }}>
            {props.tiles.map((tile, index) => <MapTile key={index} value={tile} />)}
        </div>
    )
}

export default MapRow