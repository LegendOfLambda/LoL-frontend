export const SET_PLAYER_NAME = 'SET PLAYER NAME';

interface SetPlayerNameAction {
    type: typeof SET_PLAYER_NAME;
    payload: string;
}

export type PlayerActionTypes = SetPlayerNameAction