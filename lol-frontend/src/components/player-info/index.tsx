import React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../redux';
import { InventoryState } from '../../redux/models/inventory-model';
import { PlayerInfo, PlayerLocation } from '../../redux/models/player_model';

import './info.scss';
import StatDisplay from './stats';
import BasicInformation from './basic-info';
import Inventory from './inventory';


interface IProps {
    player: PlayerInfo,
    geo: PlayerLocation,
    inventory: InventoryState
}

const PlayerInformation = (props: IProps) => {
    return(
        <div className='info-wrapper'>
            <div className='info-top'>
                <BasicInformation player={props.player} geo={props.geo} />
                <StatDisplay stats={props.player} />
            </div>
            <div>
                <Inventory inventory={props.inventory} />
            </div>
        </div>
    )
}

const mstp = (state: AppState) => ({
    player: state.player.details,
    geo: state.player.geo,
    inventory: state.inventory
})

export default connect(mstp, null)(PlayerInformation)