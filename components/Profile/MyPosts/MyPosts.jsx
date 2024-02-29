import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = [{id: 1, message: 'Hi! How are you?', likeCount: 2},
        {id: 2, message: 'It\'s my first message', likeCount: 25},
        {id: 3, message: 'It\'s my second message', likeCount: 27},
        {id: 3, message: 'It\'s my treteee message', likeCount: 29},
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likeCount}/> )

    return (<div className={s.postsBlock}>
        <h3>My posts</h3>
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
            {postsElements}
        </div>


    </div>)
}

export default MyPosts;