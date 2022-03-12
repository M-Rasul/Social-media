import {profileApi} from "../api/api";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
let initialState = {
    posts: [
        {message:"Hey! Im leaving to California!", count:52, id:1},
        {message:"Wow! That's my new project.", count:0, id:2}
    ],
    profile: null,
    status: ""
};
const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let body = action.post;
            return {
                ...state,
                posts: [...state.posts, {message: body, count: 0, id: 3}],
            };
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state, status: action.status
            };
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(p => p.id != action.postId)
            };
        default: return state;
    }
}
export let addPostActionCreator = (post) => ({type: ADD_POST, post})
export let deletePost = (postId) => ({type: DELETE_POST, postId})
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export let setStatus = (status) => ({type: SET_STATUS, status})
export const setProfileThunk = (userId) => {
    return dispatch => {
        profileApi.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}
export const getStatus = (userId) => {
    return dispatch => {
        profileApi.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            });
    }
}
export const updateStatus = (status) => {
    return dispatch => {
        profileApi.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}
export default profileReducer;