import {
    CHANGE_GAME_POINTS, CHANGE_LEVEL, CHANGE_LEVEL_POINTS, CHANGE_PAGE, USER_AUTHORIZATION_EMAIL,
    USER_AUTHORIZATION_GAME_POINTS, USER_AUTHORIZATION_LEVEL, USER_AUTHORIZATION_NICKNAME, USER_AUTHORIZATION_UID,
    USER_REGISTRATION_EMAIL, USER_REGISTRATION_NICKNAME, USER_REGISTRATION_UID
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
        case USER_REGISTRATION_NICKNAME:
            return {...state, nickname: action.payload};
        case USER_REGISTRATION_EMAIL:
            return {...state, email: action.payload};
        case USER_REGISTRATION_UID:
            return {...state, uid: action.payload};
        case USER_AUTHORIZATION_NICKNAME:
            return {...state, nickname: action.payload};
        case USER_AUTHORIZATION_EMAIL:
            return {...state, email: action.payload};
        case USER_AUTHORIZATION_UID:
            return {...state, uid: action.payload};
        case USER_AUTHORIZATION_LEVEL:
            return {...state, level: action.payload};
        case USER_AUTHORIZATION_GAME_POINTS:
            return {...state, gamePoints: action.payload};
        default:
            return state;
    }
}

