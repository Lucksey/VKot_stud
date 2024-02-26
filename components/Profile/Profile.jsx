import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={classes.content}>
        <img alt='' className={classes.big_banner}
             src='//www.shutterstock.com/image-photo/chairs-umbrella-palm-beach-tropical-600nw-559599520.jpg'/>
        <div>
            <img alt='' className={classes.avatar}
                 src='https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo='/>
        </div>
        <div>ава + description</div>
        <MyPosts/>
    </div>
}

export default Profile;