import { GameState } from '../../models/game-model';

export const SET_WIN = 'SET_WIN';

interface SetWinAction {
    type: typeof SET_WIN;
    payload: GameState;
}

export type GameActionTypes = SetWinAction