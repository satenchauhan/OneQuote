import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/reducers/authReducer";


const rootReducer = combineReducers({
    auth:authReducer
})



export const reduxStore = createStore(rootReducer, applyMiddleware(thunk))