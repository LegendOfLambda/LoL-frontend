import { PlayerState } from '../models/player_model';

import { PlayerActionTypes, SET_PLAYER_NAME } from '../actions/types/player-types';

const initialState: PlayerState = {
    name: '',
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
        default:
            return state
    }
}