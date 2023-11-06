import { combineReducers } from "redux";
import docReducer from "./docSlice";
import ptReducer from "./ptSlice"

export default combineReducers({
    doc: docReducer,
    pt: ptReducer
})