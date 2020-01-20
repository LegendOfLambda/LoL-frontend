import { combineReducers } from 'redux';
import { playerReducer } from './reducers/player_reducer';

const rootReducer = combineReducers({
    player: playerReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer