import {
    CHANGE_GAME_POINTS,
    CHANGE_LEVEL,
    CHANGE_LEVEL_POINTS,
    CHANGE_PAGE, CHANGE_TUTORIAL,
    USER_AUTHORIZATION_EMAIL,
    USER_AUTHORIZATION_GAME_POINTS,
    USER_AUTHORIZATION_LEVEL,
    USER_AUTHORIZATION_NICKNAME,
    USER_AUTHORIZATION_PASSWORD,
    USER_AUTHORIZATION_UID,
    USER_REGISTRATION_EMAIL,
    USER_REGISTRATION_NICKNAME,
    USER_REGISTRATION_UID
} from "../utils/Constants";

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

export const userRegistrationActionNickname = nickname => ({
    type: USER_REGISTRATION_NICKNAME,
    payload: nickname
});

export const userRegistrationActionEmail = email => ({
    type: USER_REGISTRATION_EMAIL,
    payload: email
});

export const userRegistrationActionUid = uid => ({
    type: USER_REGISTRATION_UID,
    payload: uid
});

export const userAuthorizationActionNickname = nickname => ({
    type: USER_AUTHORIZATION_NICKNAME,
    payload: nickname
});

export const userAuthorizationActionEmail = email => ({
    type: USER_AUTHORIZATION_EMAIL,
    payload: email
});

export const userAuthorizationActionUid = uid => ({
    type: USER_AUTHORIZATION_UID,
    payload: uid
});

export const userAuthorizationActionLevel = level => ({
    type: USER_AUTHORIZATION_LEVEL,
    payload: level
});

export const userAuthorizationActionGamePoints = gamePoints => ({
    type: USER_AUTHORIZATION_GAME_POINTS,
    payload: gamePoints
});

export const userAuthorizationActionPassword = password => ({
    type: USER_AUTHORIZATION_PASSWORD,
    payload: password
});

export const changeTutorialAction = description => ({
    type: CHANGE_TUTORIAL,
    payload: description
});

export const changeSnakeColorAction = color => ({
    type: CHANGE_TUTORIAL,
    payload: color
});