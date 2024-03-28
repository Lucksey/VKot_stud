import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={classes.content}>
            <img alt='' className={classes.big_banner}
                 src='//www.shutterstock.com/image-photo/chairs-umbrella-palm-beach-tropical-600nw-559599520.jpg'/>
            <div>
                <img alt='' className={classes.avatar}
                     src='https://www.rgo.ru/sites/default/files/styles/head_image_article/public/node/61549/photo-2023-11-08-150058.jpeg?itok=2Z42QgJa'/>
            </div>
            <div className={classes.descritpionBlock}>description</div>
        </div>
    )
}

export default ProfileInfo;