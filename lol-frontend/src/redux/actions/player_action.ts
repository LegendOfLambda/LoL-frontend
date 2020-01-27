import {
    SET_PLAYER_DATA,
    PlayerActionTypes,
    MOVE_PLAYER,
    SET_PLAYER_TOKEN,
    SET_NEW_POSITION,
} from './types/player-types';
import { PlayerLocation, PlayerInfo, PlayerToken } from '../models/player_model';

export function setPlayerData(newPlayer: PlayerInfo): PlayerActionTypes {
    return {
        type: SET_PLAYER_DATA,
        payload: newPlayer
    }
}

export function MovePlayer(newPosition: PlayerLocation): PlayerActionTypes {
    return {
        type: MOVE_PLAYER,
        payload: newPosition
    }
}

export function SetToken(newToken: PlayerToken): PlayerActionTypes {
    return {
        type: SET_PLAYER_TOKEN,
        payload: newToken
    }
}

export function SetNewPosition(newPos: Array<number>): PlayerActionTypes {
    return {
        type: SET_NEW_POSITION,
        payload: newPos
    }
}