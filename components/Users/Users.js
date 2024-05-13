import React from "react"
import s from "./users.module.css"
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

let Users = (props) => {

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
                        {u.followed
                            ? <button onClick={() => {
                                usersAPI.unfollowUser(u.id)
                                    .then(data => {
                                        if (data.resultCode == 0) {
                                            props.unfollow(u.id);
                                        }
                                    });

                            }}>Unfollow</button>
                            : <button onClick={() => {
                                usersAPI.followUser(u.id)
                                    .then(data => {
                                        if (data.resultCode == 0) {
                                            props.follow(u.id);
                                        }
                                    });

                            }}>Follow</button>}
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