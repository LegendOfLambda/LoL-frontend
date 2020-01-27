import {
    SET_ROOM,
    MapActionTypes
} from './types/map-types';
import { Room } from '../models/map_model';

export function addTiles(newTiles: Room): MapActionTypes {
    return {
        type: SET_ROOM,
        payload: newTiles
    }
}

