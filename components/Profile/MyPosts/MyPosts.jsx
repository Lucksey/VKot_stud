import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div>
                    <button>Delete</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message='Hi! How are you?' likesCount='2'/>
                <Post message="It's my first message." likesCount='25'/>
            </div>
        </div>
    )
}

export default MyPosts;