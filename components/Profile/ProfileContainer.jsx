import React, {useEffect} from 'react';
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "redux";

export function withRouter(Children) {
    return (props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

const ProfileContainer = (props) => {
    const dispatch = useDispatch()
    const {profile, status} = useSelector(state => state.profilePage)
    const onGetStatus = (userId) => {
        dispatch(getStatus(userId))
    }

    const onGetUserProfile = (userId) => {
        dispatch(getUserProfile(userId))
    }

    const onUpdateStatus = (data) => {
        dispatch(updateStatus(data))
    }

    useEffect(() => {
        let userId = props.match.params.userId || 31104;
        onGetUserProfile(userId)
        onGetStatus(userId)
    }, [])

    return (
        <Profile profile={profile} status={status} updateStatus={onUpdateStatus}/>
    )
}
export default compose(
    withRouter,
    withAuthNavigate
)(ProfileContainer);