import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let messageData = [{id: 1, message: 'Hi! How are you?', likeCount: 2},
        {id: 2, message: 'It\'s my first message', likeCount: 25},]

    return (<div className={s.postsBlock}>
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
        <div className={s.posts}>
            <Post id={messageData[0].id} message={messageData[0].message} likesCount={messageData[0].likeCount}/>
            <Post id={messageData[1].id} message={messageData[1].message} likesCount={messageData[1].likeCount}/>
        </div>


    </div>)
}

export default MyPosts;