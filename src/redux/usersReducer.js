import {userApi} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';
let initialState = {
    users: [],
    pageSize: 5,
    totalUsers: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};
const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {...state,
            users: state.users.map(u => {
                if(u.id===action.id)
                {
                    return {...u, followed: true};
                }
                return u;
            })
            }
        case UNFOLLOW:
            return {...state,
                users: state.users.map(u => {
                    if(u.id===action.id)
                    {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_COUNT:
            return {...state, totalUsers: action.totalCount};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case FOLLOWING_IN_PROGRESS:
            return {...state, followingInProgress:
                    action.isFetching
                        ?[...state.followingInProgress, action.userId]
                        :state.followingInProgress.filter(id =>id!=action.userId)};
        default: return state;
    }
}
export let follow = (userID) => ({type: FOLLOW, id: userID})
export let unfollow = (userID) => ({type: UNFOLLOW, id: userID})
export let setUsers = (users) => ({type: SET_USERS, users: users})
export let setTotalCount = (totalCount) => ({type:SET_TOTAL_COUNT, totalCount: totalCount})
export let setIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching: isFetching})
export let setFollowingInProgress = (isFetching, userId) => ({type:FOLLOWING_IN_PROGRESS, isFetching, userId})
export let setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage})
export const getUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {
    dispatch(setIsFetching(true));
    userApi.getUsers(currentPage, pageSize).then(data => {
        dispatch(setCurrentPage(currentPage))
        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(54));
    });
}
}
export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingInProgress(true, userId));
        userApi.postUsers(userId)
            .then(data => {
                if(data.resultCode == 0) {
                    dispatch(follow(userId))
                }
                dispatch(setFollowingInProgress(false, userId));
            });
    }
}
export const unfollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingInProgress(true, userId));
        userApi.deleteUsers(userId)
            .then(data => {
                if(data.resultCode == 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(setFollowingInProgress(false, userId));
            });
    }
}
export default usersReducer;