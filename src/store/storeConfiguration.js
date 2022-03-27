import {createStore} from "redux";
import {gameReducer} from "../reducers/gameReducer";

const initialState = {
    page: 'Home'
}

export const store = createStore(gameReducer, initialState)