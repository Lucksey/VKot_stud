import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {useForm} from "react-hook-form";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likeCount}/>)

    return (<div className={s.postsBlock}>
        <h3>My posts</h3>{/*СТЕНА (последние посты сверху)*/}
        <div>
            <AddNewPostForm onSubmit={props.addPost} />
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>)
}

const AddNewPostForm = (props) => {
    const { register, handleSubmit, reset } = useForm();
    let onSubmit = (data) => {
        if (data.newPostText) {
            props.onSubmit(data.newPostText)
            reset()
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='input bukvЫ'  {...register("newPostText") } />
            <input type="submit" />
        </form>
    )
}


export default MyPosts;