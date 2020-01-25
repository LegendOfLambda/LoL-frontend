import { RegisterState } from "../../models/register_model";

export const SET_REGISTER_DATA = "SET_PLAYER_DATA";

interface SetRegisterData {
  type: typeof SET_REGISTER_DATA;
  payload: RegisterState;
}

export type RegisterActionTypes = SetRegisterData;
