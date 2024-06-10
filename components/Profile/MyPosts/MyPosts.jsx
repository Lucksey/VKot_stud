import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {useForm} from "react-hook-form";
import {useGetDataMyPost} from "./MyPosts.hoc";

const MyPosts = React.memo(props => {

    const {posts, onAddPostClick} = useGetDataMyPost();

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddNewPostForm onSubmit={onAddPostClick}/>
            </div>
            <div className={s.posts}>
                {posts.map(p => <Post message={p.message} likesCount={p.likeCount}/>)}

            </div>
        </div>
    )
})

const AddNewPostForm = (props) => {

    const {register, handleSubmit, reset} = useForm();

    let onSubmit = (data) => {
        if (data.newPostText) {
            props.onSubmit(data.newPostText)
            reset()
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='input bukvЫ'  {...register("newPostText")} />
            <input type="submit"/>
        </form>
    )
}


export default MyPosts;