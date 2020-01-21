import { PlayerState } from '../models/player_model';

import {
    PlayerActionTypes,
    MOVE_PLAYER,
    SET_PLAYER_DATA
} from '../actions/types/player-types';

const initialState: PlayerState = {
    details: {
        name: 'Link',
        hp: 5,
        str: 10,
        def: 10,
        stamina: 10
    },
    geo: {
        position: [0, 0],
        spriteLocation: '0px -32px',
        direction: 'EAST',
        walkIndex: 0,
        level: 0
    }
}

export function playerReducer(
    state = initialState,
    action: PlayerActionTypes
): PlayerState {
    switch(action.type) {

        case SET_PLAYER_DATA:
            return {
                ...state,
                details: action.payload
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