import {createStore} from "redux";
import {gameReducer} from "../reducers/gameReducer";
import {homePage, levelArrThree, levelArrOne, levelArrTwo, levelArrZero} from "../utils/Constants";

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
        three: levelArrThree
    },
    tutorial: {description: []},
    snakeColor: 'black'
}

export const store = createStore(gameReducer, initialState)