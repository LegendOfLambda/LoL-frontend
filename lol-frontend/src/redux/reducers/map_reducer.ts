import { MapState } from '../models/map_model';
import { rooms } from '../../maps/one';

import {
    MapActionTypes,
    SET_ROOM
} from '../actions/types/map-types';

const initialState: MapState = {
    rooms: rooms[0]
}

export function mapReducer(
    state = initialState,
    action: MapActionTypes
): MapState {
    switch(action.type) {
        case SET_ROOM:
            return {
                rooms: action.payload
            }
        default:
            return state
    }
}