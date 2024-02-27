import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={classes.content}>
            <img alt='' className={classes.big_banner}
                 src='//www.shutterstock.com/image-photo/chairs-umbrella-palm-beach-tropical-600nw-559599520.jpg'/>
            <div>
                <img alt='' className={classes.avatar}
                     src='https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo='/>
            </div>
            <div className={classes.descritpionBlock}>description</div>
        </div>
    )
}

export default ProfileInfo;