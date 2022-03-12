import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import navbarReducer from "./navbarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import {reducer as formReducer} from "redux-form";
import thunk from "redux-thunk";
import appReducer from "./appReducer";
let reducers = combineReducers(
    {
        profile: profileReducer,
        messagesPart: messagesReducer,
        navbar: navbarReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer
    }
);
let store = createStore(reducers, applyMiddleware(thunk));
export default store;