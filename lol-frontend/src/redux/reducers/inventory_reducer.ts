import { InventoryState } from '../models/inventory-model';
import {
    SET_INVENTORY,
    InventoryActionTypes
} from '../actions/types/inventory-types';

const initialState: InventoryState = {
    gems: 0,
    armor: {
        name: 'Battered Shield',
        description: 'Equipping this item will increase your defense by 2',
        slot: 0,
        def: 2
    },
    weapons: {
        name: 'Rusty Sword',
        description: 'Equipping this item will increase your attack power by 5',
        slot: 1,
        attk_pwr: 5
    },
    pots: {
        name: 'Health Potion',
        description: 'Drinking this will give you 1hp',
        hp_restored: 1
    },
    max_slots: 6
}

export function inventoryReducer(
    state = initialState,
    action: InventoryActionTypes
): InventoryState {
    switch(action.type) {
        case SET_INVENTORY:
            return action.payload;
        default:
            return state
    }
}