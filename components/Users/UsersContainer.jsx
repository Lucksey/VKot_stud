import React from "react";
import {connect} from "react-redux";
import {
    follow,
    requestUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {
    getsUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalCount
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:  state.usersPage.followingInProgress
    }
}*/

let mapStateToProps = (state) => {
    return {
        users: getsUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:  getFollowingInProgress(state)
    }
}

export default compose(
    withAuthNavigate,
    connect (mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleFollowingProgress,
        getUsers: requestUsers
    }
))(UsersContainer)
