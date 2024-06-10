import React from "react"
import s from "./users.module.css"
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {

    return<div>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img alt='image' src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                user.followed ? unfollow(user.id) : follow(user.id)
                            }}>{user.followed ? 'Unfollow' : 'Follow'}</button>
                </div>
            </div>
            <div>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </div>
            </div>
        </div>

}

export default User