import { MapState } from '../models/map_model';
import { tiles } from '../../maps/one';

import {
    MapActionTypes,
    ADD_TILES
} from '../actions/types/map-types';

const initialState: MapState = {
    tiles: tiles
}

export function mapReducer(
    state = initialState,
    action: MapActionTypes
): MapState {
    switch(action.type) {
        case ADD_TILES:
            return {
                ...state,
                tiles: action.payload.tiles
            }
        default:
            return state
    }
}