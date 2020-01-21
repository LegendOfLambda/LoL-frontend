import { InventoryState } from '../../models/inventory-model';

export const SET_INVENTORY = 'SET_INVENTORY';

interface SetInventoryAction {
    type: typeof SET_INVENTORY;
    payload: InventoryState;
}

export type InventoryActionTypes = SetInventoryAction