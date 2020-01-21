import { PlayerState } from '../models/player_model';

import {
    PlayerActionTypes,
    SET_PLAYER_NAME,
    MOVE_PLAYER
} from '../actions/types/player-types';

const initialState: PlayerState = {
    name: '',
    geo: {
        position: [0, 0],
        spriteLocation: '0px -32px',
        direction: 'EAST',
        walkIndex: 0
    }
}

export function playerReducer(
    state = initialState,
    action: PlayerActionTypes
): PlayerState {
    switch(action.type) {

        case SET_PLAYER_NAME:
            return {
                ...state,
                name: action.payload
            }

        case MOVE_PLAYER:
            return {
                ...state,
                geo: action.payload
            }

        default:
            return state
    }
}