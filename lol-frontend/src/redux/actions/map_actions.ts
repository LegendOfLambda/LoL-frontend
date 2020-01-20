import {
    ADD_TILES,
    MapActionTypes
} from './types/map-types';
import { MapState } from '../models/map_model';

export function addTiles(newTiles: MapState): MapActionTypes {
    return {
        type: ADD_TILES,
        payload: newTiles
    }
}

