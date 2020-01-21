import { PlayerLocation } from "../../models/player_model";

export const SET_PLAYER_NAME = 'SET PLAYER NAME';
export const MOVE_PLAYER = 'MOVE_PLAYER';

interface SetPlayerNameAction {
    type: typeof SET_PLAYER_NAME;
    payload: string;
}

interface MovePlayerAction {
    type: typeof MOVE_PLAYER;
    payload: PlayerLocation
}

export type PlayerActionTypes =
    SetPlayerNameAction |
    MovePlayerAction