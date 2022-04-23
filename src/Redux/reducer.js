import { GETONERECIPEFAILED, GETONERECIPELODING, GETONERECIPESUCESS, GETRECIPEFAILED, GETRECIPELODING, GETRECIPESUCESS } from "./actionTypes";


const initialState = { data: [], loding: false, error: null,recipe:{} };
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GETRECIPELODING:
            return { ...state, loding: true }
        case GETRECIPESUCESS:
            return { ...state, loding: false, data: action.payload }
        case GETRECIPEFAILED:
            return { ...state, loding: false, error: action.payload }
        case GETONERECIPELODING:
            return { ...state, loding: true }
        case GETONERECIPESUCESS:
            return { ...state, loding: false, recipe: action.payload }
        case GETONERECIPEFAILED:
            return { ...state, loding: false, error: action.payload }
        default:
            return state;
    }

}
export default reducer;