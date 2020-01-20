import { SET_PLAYER_NAME, PlayerActionTypes } from './types/player-types';

export function setName(newName: string): PlayerActionTypes {
    return {
        type: SET_PLAYER_NAME,
        payload: newName
    }
}