import { editPlayerPosition } from "./actions";
import { PlayerState, PlayerActionTypes } from "./types";

const initialState = {
  position: [0, 0]
};

const playerReducer = (
  state = initialState,
  action: PlayerActionTypes
): PlayerState => {
  const { position } = state;
  switch (action.type) {
    case "EDIT_PLAYER_POSITION":
      return editPlayerPosition(position);
    default:
      return state;
  }
};

export default playerReducer;
