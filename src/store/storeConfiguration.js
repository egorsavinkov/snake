import {createStore} from "redux";
import {gameReducer} from "../reducers/gameReducer";
import {
    homePage, levelArrFree, levelArrOne,
    levelArrTwo, levelArrZero
} from "../utils/Constants";

const initialState = {
    page: homePage,
    levelPoints: 0,
    gamePoints: 0,
    level: 'zero',
    barrier: {
        zero: levelArrZero,
        one: levelArrOne,
        two: levelArrTwo,
        free: levelArrFree
    }
}

export const store = createStore(gameReducer, initialState)