import { RegisterActionTypes, SET_REGISTER_DATA } from "./types/register-types";
import { RegisterState } from "../models/register_model";

import axios from "axios";

export function registerUser(newUser: RegisterState): RegisterActionTypes {
  Promise.resolve(axios.post("IMPORT END POINT HERE", newUser));
  return {
    type: SET_REGISTER_DATA,
    payload: newUser
  };
}
