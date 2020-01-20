import React, {Component} from 'react';
import './map.scss';
import MapRow from './map_row';

interface IProps {
    tiles: Array<Array<number>>
}

class Map extends Component<IProps> {
    public render() {
        return(
            <div className='map'>
                {this.props.tiles.map( row => <MapRow tiles={row} />)}
            </div>
        )
    }
}

export default Map