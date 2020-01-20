import * as React from 'react';
import { connect } from 'react-redux';
import Player from '../player';
import Map from '../map';
import './world.scss';
import { AppState } from '../../redux';

interface IProps {
    tiles: Array<Array<number>>
}

const World = (props: IProps) => {
    return (
        <div className='world'>
            <Map tiles={props.tiles} />
            <Player position={[]} />
        </div>
    )
}

const mstp = (state: AppState) => ({
    tiles: state.map.tiles
})

export default connect(mstp, null)(World)