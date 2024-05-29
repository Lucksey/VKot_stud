import React from 'react';
import {addPost} from "../../../redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";

export const useGetDataMyPost = () => {
    const profilePage = useSelector(state => state.profilePage)
    const dispatch = useDispatch()

    let onAddPostClick = (newPostText) => {
        dispatch(addPost(newPostText))
    }

    return {
        posts: profilePage.posts,
        onAddPostClick,
    }
}


