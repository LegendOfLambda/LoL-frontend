import { combineReducers } from 'redux';
import { playerReducer } from './reducers/player_reducer';
import { mapReducer } from './reducers/map_reducer';
import { inventoryReducer } from './reducers/inventory_reducer';
import { gameReducer } from './reducers/game_reducer';

const rootReducer = combineReducers({
    player: playerReducer,
    map: mapReducer,
    inventory: inventoryReducer,
    game: gameReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer