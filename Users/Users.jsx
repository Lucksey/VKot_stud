import React from "react";
import s from './users.module.css';
import axios from "axios";
import userPhoto from '../assets/images/user.png'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        let patesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i=1; i <= patesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p => {
                   return <span className={this.props.currentPage === p && s.selectedPage }
                   onClick={(e) =>{ this.onPageChanged(p);}}>{p}</span>
                })}

            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <div>
                        <div>
                            <img alt='image' src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
}

export default Users;
// Классовая компонента