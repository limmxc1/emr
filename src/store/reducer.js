import { combineReducers } from "redux";
import docReducer from "./docSlice";

export default combineReducers({
    doc: docReducer
})