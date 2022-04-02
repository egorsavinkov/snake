import {
    CHANGE_GAME_POINTS, CHANGE_LEVEL,
    CHANGE_LEVEL_POINTS, CHANGE_PAGE
} from "../utils/Constants";

export const gameReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_PAGE:
            return {...state, page: action.payload};
        case CHANGE_GAME_POINTS:
            return {...state, gamePoints: action.payload};
        case CHANGE_LEVEL_POINTS:
            return {...state, levelPoints: action.payload}
        case CHANGE_LEVEL:
            return {...state, level: action.payload}
        default:
            return state;
    }
}

