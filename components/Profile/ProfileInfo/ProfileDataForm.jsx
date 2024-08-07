import React from "react";

const ProfileDataForm = ({profile}) => {
    return <div>
        <div><b>Name: {profile.fullName}</b></div>
            <div><b>Looking for a job </b>: {profile.lookingForAJob ? 'yes' : 'no'}</div>
            <div><b>My professional skills</b>: {profile.lookingForAJobDescription ? 'yes' : 'no'}</div>
            <div><b>About me</b>: {profile.aboutMe}</div>
            {/*<div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key}
                                contactTitle={key}
                                contactValue={profile.contacts[key]}/>
            })}
            </div>*/} Forma реализовать формы для обновления профиля (97 урок / добавить форм контроль)
    </div>

}

export default ProfileDataForm;
