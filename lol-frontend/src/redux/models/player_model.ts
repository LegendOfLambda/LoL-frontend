export interface PlayerState {
    name: string;
    geo: PlayerLocation;
}

export interface PlayerLocation {
    position: number[];
    spriteLocation: string;
    direction: string;
}