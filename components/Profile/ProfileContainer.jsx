import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {Navigate, useParams} from "react-router-dom";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "redux";

export function withRouter(Children) {
    return (props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId || 31104;
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

//let AuthNavigateComponent = withAuthNavigate(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

//const WhitsUrlDataContainerComponent = withRouter(AuthNavigateComponent);
//export default connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})(WhitsUrlDataContainerComponent);

export default compose(
 connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthNavigate
) (ProfileContainer);