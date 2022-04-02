import {
    CHANGE_GAME_POINTS, CHANGE_LEVEL,
    CHANGE_LEVEL_POINTS, CHANGE_PAGE
} from "../utils/Constants";

export const changePageAction = page => ({
    type: CHANGE_PAGE,
    payload: page
})

export const changeLevelPointsAction = points => ({
    type: CHANGE_LEVEL_POINTS,
    payload: points
})

export const changeGamePointsAction = points => ({
    type: CHANGE_GAME_POINTS,
    payload: points
})

export const changeLevelAction = level => ({
    type: CHANGE_LEVEL,
    payload: level
})