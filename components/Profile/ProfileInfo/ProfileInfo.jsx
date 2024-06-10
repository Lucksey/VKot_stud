import React from 'react';
import classes from './ProfileInfo.module.css';
import headerLogo from "../../../assets/images/beach.webp";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) { // если НЕ профиль, то прелоадер
        return <Preloader/>
    }

    return (
        <div className={classes.content}>
            <img alt='BANNER' className={classes.big_banner}
                 src={headerLogo}/>
            <div className={classes.descritpionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatusWithHooks status={props.status}
                                        updateStatus={props.updateStatus}/>
                <br/>
                Name: {props.profile.fullName} <br/>
                Обо мне: {props.profile.aboutMe} <br/>
                {props.profile.contacts.facebook}<br/>

            </div>
        </div>
    )
}

export default ProfileInfo;