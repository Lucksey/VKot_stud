import React from 'react';
import classes from './ProfileInfo.module.css';
import headerLogo from "../../../assets/images/beach.webp";
import avatar from '../../../assets/images/catLion.jpeg';

const ProfileInfo = () => {
    return (
        <div className={classes.content}>
            <img alt='' className={classes.big_banner}
                 src={headerLogo}/>
            <div>
                <img alt='' className={classes.avatar}
                     src={avatar}/>
            </div>
            <div className={classes.descritpionBlock}>description</div>
        </div>
    )
}

export default ProfileInfo;