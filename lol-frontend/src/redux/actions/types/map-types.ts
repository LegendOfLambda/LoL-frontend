import { MapState } from '../../models/map_model';

export const ADD_TILES = 'ADD TILES';

interface AddTilesAction {
    type: typeof ADD_TILES;
    payload: MapState;
}

export type MapActionTypes =
    AddTilesAction