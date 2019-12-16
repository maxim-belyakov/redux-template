import { combineReducers } from "redux"
import userInfo from "./info"

// все редьюсеры в одном месте
const rootReducer = combineReducers({
    userInfo
})

export default rootReducer;