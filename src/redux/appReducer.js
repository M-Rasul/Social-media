import {checkAuthThunk} from "./authReducer";
const SET_INITIALIZED = "SET_INITIALIZED";
let initialState = {
    initialized: false
};
const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED:
            return {...state,
               initialized: true
            }
        default: return state;
    }
}
export let setInitialized = () => ({type: SET_INITIALIZED})
export const initialize = () => {
    return dispatch => {
        let promise = dispatch(checkAuthThunk());
        promise.then(() => {
           dispatch(setInitialized());
        });
    }
}
export default appReducer;