export interface PlayerState {
    token: PlayerToken;
    details: PlayerInfo;
    geo: PlayerLocation;
}

export interface PlayerInfo {
    name: string;
    hp?: number;
    str?: number;
    def?: number;
    stamina?: number;
}

export interface PlayerLocation {
    position: number[];
    spriteLocation: string;
    direction: string;
    walkIndex: number;
    level: number;
}

export interface PlayerToken {
    key: string;
}