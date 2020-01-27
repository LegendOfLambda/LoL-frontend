
import { 
    GameState 
} from '../models/game-model';
import { 
    SET_WIN, 
    GameActionTypes 
} from './../actions/types/game-types';

const initialState: GameState = {
    won: false
}

export function gameReducer(
    state = initialState,
    action: GameActionTypes
): GameState {
    switch(action.type) {
        case SET_WIN:
            return action.payload;
        default:
            return state
    }
}