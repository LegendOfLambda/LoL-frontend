import { PlayerLocation, PlayerInfo } from "../../models/player_model";

export const MOVE_PLAYER = 'MOVE_PLAYER';
export const SET_PLAYER_DATA = 'SET_PLAYER_DATA';

interface SetPlayerData {
    type: typeof SET_PLAYER_DATA;
    payload: PlayerInfo;
}

interface MovePlayerAction {
    type: typeof MOVE_PLAYER;
    payload: PlayerLocation;
}

export type PlayerActionTypes =
    SetPlayerData |
    MovePlayerAction