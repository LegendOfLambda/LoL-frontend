import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../redux';

import './world.scss';
import Player from '../player';
import Map from '../map';
import { Room } from '../../redux/models/map_model';




interface IProps {
    room: Room
}

const World = (props: IProps) => {
    return (
        <div className='world'>
            <Map room={props.room} />
            <Player
                geo={{
                    position: [],
                    spriteLocation: '',
                    direction: '',
                    walkIndex: 0,
                    level: 0
                }}
                room={props.room}
            />
        </div>
    )
}

const mstp = (state: AppState) => ({
    rooms: state.map.rooms
})

export default connect(mstp, null)(World)