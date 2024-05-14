import React from "react"
import s from "./users.module.css"
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {toggleFollowingProgress} from "../../redux/users-reducer";

let Users = (props) => {

    const handleUnfollow = (userId) => { // если в props значение followingInProgress будет true, то кнобка будет отключена
        props.toggleFollowingProgress(true, userId);
        usersAPI.unfollowUser(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    props.unfollow(userId);
                }
                props.toggleFollowingProgress(false, userId);
            });
    }

    const handleFollow = (userId) => { // если в props значение followingInProgress будет true, то кнобка будет отключена
        props.toggleFollowingProgress(true, userId);
        usersAPI.followUser(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    props.follow(userId);
                }
                props.toggleFollowingProgress(false, userId);
            });

    }


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img alt='image' src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink className={s.userLink} to={'/profile/' + u.id}>
                            Go to Profile</NavLink>
                    </div>
                    <div>
                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    u.followed ? handleUnfollow(u.id) : handleFollow(u.id)
                                }}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                    </div>
                </div>
                <div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;