import {authAPI, usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}

export const setAuthUserData = (id, login, email, isAuth) => (
    {type: SET_USER_DATA, payload: {id, login, email, isAuth}})

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, login, email, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        throw new Error('ACCESS DENIED');
    }

}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

/*export const authUser = (userId, login, email) => {
    return async (Dispatch) => {
        let data = await usersAPI.authUser(userId, login, email)

        if (data.resultCode === 0) {
            let {userId, login, email} = data.data;
            Dispatch(setAuthUserData(userId, login, email));
        }
    }
}*/


export default authReducer;