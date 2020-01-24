import React from 'react'
import { PlayerInfo, PlayerLocation } from '../../../redux/models/player_model';
import Health from '../health';

interface IProps {
    player: PlayerInfo;
    geo: PlayerLocation
}

const BasicInformation = (props: IProps) => {
    return (
        <div className="basic-wrap">
            <Health hp={props.player.hp || 0} />
            <p>Level: {props.geo.level}</p>
            <h2>{props.player.name}</h2>
        </div>
    )
}

export default BasicInformation