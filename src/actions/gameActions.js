import {
    CHANGE_GAME_POINTS, CHANGE_LEVEL, CHANGE_LEVEL_POINTS,
    CHANGE_PAGE, USER_AUTHORIZATION, USER_REGISTRATION
} from "../utils/Constants";
import Authorization from "../components/Authorization";

export const changePageAction = page => ({
    type: CHANGE_PAGE,
    payload: page
});

export const changeLevelPointsAction = points => ({
    type: CHANGE_LEVEL_POINTS,
    payload: points
});

export const changeGamePointsAction = points => ({
    type: CHANGE_GAME_POINTS,
    payload: points
});

export const changeLevelAction = level => ({
    type: CHANGE_LEVEL,
    payload: level
});

export const userRegistrationAction = user => ({
    type: USER_REGISTRATION,
    payload: user
});

export const userAuthorizationAction = user => ({
    type: USER_AUTHORIZATION,
    payload: user
});