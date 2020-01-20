export const editPlayerPosition = (position: Array<number>) =>
  ({
    type: "EDIT_PLAYER_POSITION",
    position
  } as const);
