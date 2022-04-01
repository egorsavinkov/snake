import {createStore} from "redux";
import {gameReducer} from "../reducers/gameReducer";

const initialState = {
    page: 'Game'
}

export const store = createStore(gameReducer, initialState)