export interface InventoryState {
    gems: number;
    armor?: Armor;
    weapons?: Weapon;
    pots?: Consumable;
    max_slots: number;
}

export interface Armor {
    name: string;
    description: string;
    slot: Slots;
    def: number;
}

export interface Weapon {
    name: string;
    description: string;
    slot: Slots;
    attk_pwr: number;
}

export interface Consumable {
    name: string;
    description: string;
    hp_restored: number;
}

export enum Slots {
    off_hand, // 0
    main_hand // 1
}