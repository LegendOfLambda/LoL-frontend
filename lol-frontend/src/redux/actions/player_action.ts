import {
    SET_PLAYER_NAME,
    PlayerActionTypes,
    SET_PLAYER_POSITION
} from './types/player-types';

export function setName(newName: string): PlayerActionTypes {
    return {
        type: SET_PLAYER_NAME,
        payload: newName
    }
}

export function setPosition(newPosition: number[]): PlayerActionTypes {
    return {
        type: SET_PLAYER_POSITION,
        payload: newPosition
    }
}