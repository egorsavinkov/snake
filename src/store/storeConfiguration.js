import {createStore} from "redux";
import {gameReducer} from "../reducers/gameReducer";
import {homePage, levelArrFree, levelArrOne, levelArrTwo, levelArrZero} from "../utils/Constants";

const initialState = {
    nickname: '',
    email: '',
    password: '',
    uid: '',
    levelPoints: 0,
    gamePoints: 0,
    level: 'zero',
    page: homePage,
    barrier: {
        zero: levelArrZero,
        one: levelArrOne,
        two: levelArrTwo,
        free: levelArrFree
    }
}

export const store = createStore(gameReducer, initialState)