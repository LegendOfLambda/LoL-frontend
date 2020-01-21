export const SET_PLAYER_NAME = 'SET PLAYER NAME';
export const SET_PLAYER_POSITION = 'SET_PLAYER_POSITION';

interface SetPlayerNameAction {
    type: typeof SET_PLAYER_NAME;
    payload: string;
}

interface SetPlayerPositionAction {
    type: typeof SET_PLAYER_POSITION;
    payload: number[]
}

export type PlayerActionTypes =
    SetPlayerNameAction |
    SetPlayerPositionAction