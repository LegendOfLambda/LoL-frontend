export interface MapState {
    rooms: Room
}

export interface Room {
    title: string;
    description: string;
    n: number;
    e: number;
    s: number;
    w: number;
    tiles: Array<Array<number>>
}