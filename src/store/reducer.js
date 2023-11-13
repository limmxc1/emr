import { combineReducers } from "redux";
import docReducer from "./docSlice";
import ptReducer from "./ptSlice"
import showDocReducer from "./showDocSlice"

export default combineReducers({
    doc: docReducer,
    pt: ptReducer,
    showDoc: showDocReducer,
})