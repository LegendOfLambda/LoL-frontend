import React from 'react';
import { PlayerInfo } from '../../../redux/models/player_model';

import sword from '../../../assetts/sword.png';
import shield from '../../../assetts/shield.png';
import bow from '../../../assetts/bow.png';
import '../info.scss';

interface IProps {
    stats: PlayerInfo
}

const StatDisplay = (props: IProps) => {
    return (
        <div className='stats-wrap'>
            <p className='icon-wrap str-wrap'>
                <img src={sword} alt='str icon' className='icons' />
                {props.stats.str}
            </p>
            <p className='icon-wrap def-wrap'>
                <img src={shield} alt='str icon' className='icons' />
                {props.stats.def}
            </p>
            <p className='icon-wrap stamina-wrap'>
                <img src={bow} alt='str icon' className='icons' />
                {props.stats.stamina}
            </p>
        </div>
    )
}

export default StatDisplay