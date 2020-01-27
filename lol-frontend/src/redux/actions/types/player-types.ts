import { PlayerLocation, PlayerInfo, PlayerToken } from "../../models/player_model";

export const MOVE_PLAYER = 'MOVE_PLAYER';
export const SET_PLAYER_DATA = 'SET_PLAYER_DATA';
export const SET_PLAYER_TOKEN = 'SET_PLAYER_TOKEN';

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

export type PlayerActionTypes =
    SetPlayerData |
    MovePlayerAction |
    SetPlayerToken