import {
    CHANGE_GAME_POINTS, CHANGE_LEVEL, CHANGE_LEVEL_POINTS,
    CHANGE_PAGE, USER_AUTHORIZATION, USER_REGISTRATION
} from "../utils/Constants";

export const gameReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_PAGE:
            return {...state, page: action.payload};
        case CHANGE_GAME_POINTS:
            return {...state, gamePoints: action.payload};
        case CHANGE_LEVEL_POINTS:
            return {...state, levelPoints: action.payload};
        case CHANGE_LEVEL:
            return {...state, level: action.payload};
        case USER_REGISTRATION:
            return {...state, user: action.payload};
        case USER_AUTHORIZATION:
            return {...state, user: action.payload};
        default:
            return state;
    }
}

