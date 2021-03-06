import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};
const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {...state,
               ...action.data
            }
        default: return state;
    }
}
export let setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA,
    data: {userId, email, login, isAuth}})
export const checkAuthThunk = () => {
    return dispatch => {
        return authApi.getUserData().then(data => {
            if(data.resultCode===0) {
                let {id, email, login} = data.data;
                dispatch(setUserData(id, email, login, true));
            }
        });
    }
}
export const login = (email, password, rememberMe) => {
    return dispatch => {
        authApi.login(email, password, rememberMe).then(data => {
            if(data.data.resultCode===0) {
                dispatch(checkAuthThunk());
            } else {
                let message = data.data.messages.length>0?data.data.messages[0]:"Some error";
                dispatch(stopSubmit("login", {_error: message}));
            }
        });
    }
}
export const logout = () => {
    return dispatch => {
        authApi.logout().then(data => {
            if(data.data.resultCode===0) {
                dispatch(setUserData(null, null, null, false));
            }
        });
    }
}
export default authReducer;