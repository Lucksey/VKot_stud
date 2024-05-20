import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Navigate, useParams} from "react-router-dom";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";

export function withRouter(Children) {
    return (props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId || 2;
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let AuthNavigateComponent = withAuthNavigate(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

const WhitsUrlDataContainerComponent = withRouter(AuthNavigateComponent);
export default connect(mapStateToProps, {getUserProfile})(WhitsUrlDataContainerComponent);
