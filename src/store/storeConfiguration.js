import {createStore} from "redux";
import {gameReducer} from "../reducers/gameReducer";
import {homePage} from "../utils/Constants";

const initialState = {
    page: "Game",
    levelPoints: 0,
    gamePoints: 0,
    level: 0
}

export const store = createStore(gameReducer, initialState)