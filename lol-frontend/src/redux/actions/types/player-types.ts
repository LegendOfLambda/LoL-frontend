import { PlayerLocation, PlayerInfo, PlayerToken } from "../../models/player_model";

export const MOVE_PLAYER = 'MOVE_PLAYER';
export const SET_PLAYER_DATA = 'SET_PLAYER_DATA';
export const SET_PLAYER_TOKEN = 'SET_PLAYER_TOKEN';
export const SET_NEW_POSITION = 'SET_NEW_POSITION';

interface SetPlayerData {
    type: typeof SET_PLAYER_DATA;
    payload: PlayerInfo;
}

interface MovePlayerAction {
    type: typeof MOVE_PLAYER;
    payload: PlayerLocation;
}

interface SetPlayerToken {
    type: typeof SET_PLAYER_TOKEN;
    payload: PlayerToken;
}

interface SetNewPosition {
    type: typeof SET_NEW_POSITION;
    payload: Array<number>
}

export type PlayerActionTypes =
    SetPlayerData |
    MovePlayerAction |
    SetPlayerToken |
    SetNewPosition