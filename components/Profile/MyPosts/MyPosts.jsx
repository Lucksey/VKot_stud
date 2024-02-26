import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Delete</button>
            </div>
            <div className={classes.posts}>
                <Post message='Hi! How are you?' likesCount='2'/>
                <Post message="It's my first message." likesCount='25'/>
            </div>
        </div>
    )
}

export default MyPosts;