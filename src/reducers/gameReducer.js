import {CHANGE_PAGE} from "../actions/gameActions";

export const gameReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}

