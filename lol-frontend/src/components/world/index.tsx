import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../redux';

import './world.scss';
import Player from '../player';
import Map from '../map';




interface IProps {
    tiles: Array<Array<number>>
}

const World = (props: IProps) => {
    return (
        <div className='world'>
            <Map tiles={props.tiles} />
            <Player
                geo={{
                    position: [],
                    spriteLocation: '',
                    direction: '',
                    walkIndex: 0,
                    level: 0
                }}
                tiles={[]}
            />
        </div>
    )
}

const mstp = (state: AppState) => ({
    tiles: state.map.tiles
})

export default connect(mstp, null)(World)