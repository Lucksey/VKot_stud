import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import headerLogo from "../../../assets/images/beach.webp";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm"

const ProfileInfo = ({status, updateStatus, profile, isOwner, savePhoto}) => {
    let [editMode, setEditMode] = useState(false)

    if (!profile) { // если НЕ профиль, то прелоадер
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    const Contact = ({contactTitle, contactValue}) => {
        return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue} </div>
    }

    const ProfileData = ({profile, isOwner, goToEditMode}) => {
        return <div>
            <div>
                {isOwner && <div>
                    <button onClick={goToEditMode}>EDIT</button>
                </div>}
            </div>
            <div><b>Name: {profile.fullName}</b></div>
            <div><b>Looking for a job </b>: {profile.lookingForAJob ? 'yes' : 'no'}</div>
            <div><b>My professional skills</b>: {profile.lookingForAJobDescription ? 'yes' : 'no'}</div>
            <div><b>About me</b>: {profile.aboutMe}</div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key}
                                contactTitle={key}
                                contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>

    }

    return (
        <div className={classes.content}>
            <img alt='BANNER' className={classes.big_banner}
                 src={headerLogo}/>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={classes.userPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                <ProfileStatusWithHooks status={status}
                                        updateStatus={updateStatus}/><br/>
                {editMode
                    ? <ProfileDataForm profile={profile}/>
                    : <ProfileData goToEditMode={() => {setEditMode(true)}}
                                   profile={profile}
                                   isOwner={isOwner}

                    />}
            </div>
        </div>
    )
}

export default ProfileInfo;