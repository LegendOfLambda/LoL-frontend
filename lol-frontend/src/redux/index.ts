import { combineReducers } from 'redux';
import { playerReducer } from './reducers/player_reducer';
import { mapReducer } from './reducers/map_reducer';

const rootReducer = combineReducers({
    player: playerReducer,
    map: mapReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer