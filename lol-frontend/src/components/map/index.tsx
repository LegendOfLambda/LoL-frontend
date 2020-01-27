import React, {Component} from 'react';
import './map.scss';
import MapRow from './map_row';
import { Room } from '../../redux/models/map_model';
import { connect } from 'react-redux';
import { AppState } from '../../redux';

interface IProps {
    room: Room
}

class Map extends Component<IProps> {
    public render() {
        return(
            <div className='map'>
                {this.props.room.tiles.map((row: Array<number>, index: number) => {
                    return <MapRow key={index} tiles={row} />
                })}
            </div>
        )
    }
}

const mstp = (state: AppState) => ({
    room: state.map.rooms,
})

export default connect(mstp, null)(Map)