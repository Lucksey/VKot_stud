import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import getInterestUser from '../../api/api';

export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match={match}/>
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId ||2; //1  вариант хардкода
        /*if (!userId) {  // 2 вариант
            userId = 2; // захардкодили на 2 юзера пока система не сзнает кто Я
        }*/
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId )
            .then(response => {
                this.props.setUserProfile(response.data);
            });
       /* this.props.getInterestUser(userId);*/
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

const WhitsUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile})(WhitsUrlDataContainerComponent);