import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        {id: 1, message: 'Hi message', likesCount: 34},
        {id: 2, message: 'message', likesCount: 3},
        {id: 3, message: 'message', likesCount: 13},
        {id: 4, message: 'Hi it is my first message', likesCount: 12},
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPostAC = (newPostText) => ({type: 'ADD_POST', newPostText})
export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile})
export const setStatus = (status) => ({type: 'SET_STATUS', status})

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))

}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export default profileReducer
