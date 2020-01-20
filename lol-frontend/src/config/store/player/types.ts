import { editPlayerPosition } from "./actions";

export interface PlayerState {
  readonly position: number[];
}

// Action Types

export type PlayerActionTypes = ReturnType<typeof editPlayerPosition>;
