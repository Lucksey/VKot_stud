import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [{id: 1, message: 'Hi! How are you?', likeCount: 2},
        {id: 2, message: 'It\'s my first message', likeCount: 25},
        {id: 3, message: 'It\'s my second message', likeCount: 27},],

    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: state.posts.length+1, message: action.newPostText, likeCount: 0};
            return {
                ...state,
                posts: [newPost, ...state.posts],

            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText})             //ActionCreator
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})      //ActionCreator
export const setStatus = (status) => ({type: SET_STATUS, status})                   //ActionCreator


export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}                                                                                   //ThunkCreator

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
}                                                                                   //ThunkCreator
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}                                                                                   //ThunkCreator

export default profileReducer;