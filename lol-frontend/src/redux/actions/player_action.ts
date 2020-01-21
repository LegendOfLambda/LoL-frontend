import {
    SET_PLAYER_DATA,
    PlayerActionTypes,
    MOVE_PLAYER,
} from './types/player-types';
import { PlayerLocation, PlayerInfo } from '../models/player_model';

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