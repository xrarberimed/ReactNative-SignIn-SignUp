
import { combineReducers } from "redux";
import types from "../types";

import { login } from "../Login/LoginState";

const appReducer = combineReducers({
    login
})
const rootReducer = (state, action) => {
    if (action.type == types.CLEAR_REDUX_STATE) {
        state = undefined
    }
    return appReducer(state, action)
}
export default rootReducer