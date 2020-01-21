import {
    SET_PLAYER_NAME,
    PlayerActionTypes,
    MOVE_PLAYER,
} from './types/player-types';
import { PlayerLocation } from '../models/player_model';

export function setName(newName: string): PlayerActionTypes {
    return {
        type: SET_PLAYER_NAME,
        payload: newName
    }
}

export function MovePlayer(newPosition: PlayerLocation): PlayerActionTypes {
    return {
        type: MOVE_PLAYER,
        payload: newPosition
    }
}