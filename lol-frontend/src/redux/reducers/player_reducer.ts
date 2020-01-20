import { PlayerState } from '../models/player_model';

import {
    PlayerActionTypes,
    SET_PLAYER_NAME,
    SET_PLAYER_POSITION,
} from '../actions/types/player-types';

const initialState: PlayerState = {
    name: '',
    position: [0, 0]
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
        case SET_PLAYER_POSITION:
            return {
                ...state,
                position: action.payload
            }
        default:
            return state
    }
}