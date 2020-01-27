import { Room } from '../../models/map_model';

export const SET_ROOM = 'SET_ROOM';

interface SetRoomAction {
    type: typeof SET_ROOM;
    payload: Room;
}

export type MapActionTypes =
    SetRoomAction