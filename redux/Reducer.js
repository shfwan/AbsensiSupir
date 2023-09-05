import { Category, Kalender } from "./Type"

const initData = {
    category: "",
    kalender: ""
}

export const reducerData = (state = initData, action) => {
    switch (action.type) {
        case Category:
            return {
                ...state,
                category: action.data
            }
        case Kalender:
            return {
                ...state,
                kalender: action.data
            }
        default: return state
    }
}