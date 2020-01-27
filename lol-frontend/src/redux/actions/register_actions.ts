import { RegisterState } from "../models/register_model";

import axios from "axios";
import store from "../store";
import { SET_PLAYER_TOKEN } from "./types/player-types";

export async function registerUser(newUser: RegisterState) {
    await axios.post(
      "https://legend-of-lambda.herokuapp.com/api/registration/",
      newUser
    ).then((res) => {
      store.dispatch({
        type: SET_PLAYER_TOKEN,
        payload: res.data
      })
    })
}
