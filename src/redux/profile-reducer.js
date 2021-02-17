import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi message', likesCount: 34},
        {id: 2, message: 'message', likesCount: 3},
        {id: 3, message: 'message', likesCount: 13},
        {id: 4, message: 'Hi it is my first message', likesCount: 12},
    ],
    newPostText: 'type your messages',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const addPostAC = () => ({type: 'ADD_POST'})
export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile})

export const getUserProfile = (userId) => (dispatch) => { //thunk - принимает диспач, внутри делает мелкие ассинхронные операции, может диспачить action
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}
export const updateNewPostTextAC = (text) => ({type: 'UPDATE_NEW_POST_TEXT', newText: text})

export default profileReducer

