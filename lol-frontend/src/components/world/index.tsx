import * as React from 'react';
import Player from '../player';
import Map from '../map';
import './world.scss';

const World: React.SFC<{}> = () => {
    return (
        <div className='world'>
            <Map />
            <Player position={[]}/>
        </div>
    )
}

export default World