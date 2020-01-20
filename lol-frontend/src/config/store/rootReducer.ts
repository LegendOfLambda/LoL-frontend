import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import playerReducer from "./player/reducer";

const rootReducer = combineReducers({
  player: playerReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
