import {
    SET_INVENTORY,
    InventoryActionTypes
} from './types/inventory-types';
import { InventoryState } from '../models/inventory-model';

export function SetInventory(newInventory: InventoryState): InventoryActionTypes {
    return {
        type: SET_INVENTORY,
        payload: newInventory
    }
}