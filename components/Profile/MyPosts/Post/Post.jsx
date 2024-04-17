import React from 'react';
import s from './Post.module.css';
import avatar from '../../../../assets/images/angryCat.jpeg'

const Post = (props) => {
    return <div className={s.item}>
        <img alt='picture'
             src={avatar}/>
        {props.message}
        <div>
            <span>like</span> {props.likesCount}
        </div>
    </div>
}

export default Post;