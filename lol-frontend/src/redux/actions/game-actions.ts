import {
    SET_WIN,
    GameActionTypes
} from './types/game-types';
import { GameState } from '../models/game-model';

export function SetWin(winStatus: GameState): GameActionTypes {
    return {
        type: SET_WIN,
        payload: winStatus
    }
}