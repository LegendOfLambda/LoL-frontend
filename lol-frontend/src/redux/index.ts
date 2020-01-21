import { combineReducers } from 'redux';
import { playerReducer } from './reducers/player_reducer';
import { mapReducer } from './reducers/map_reducer';
import { inventoryReducer } from './reducers/inventory_reducer';

const rootReducer = combineReducers({
    player: playerReducer,
    map: mapReducer,
    inventory: inventoryReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer