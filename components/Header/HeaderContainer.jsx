import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";
import {authUser} from "../../redux/users-reducer";

class HeaderContainer extends React.Component {
    componentDidMount(userId, login, email) {
        this.props.authUser(userId, login, email);
    }


    render() {
        return <Header{...this.props}/>
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login, // пробрасываем в презентационную компаненту
    email: state.auth.email,
});
export default connect(mapStateToProps,{setAuthUserData, authUser}) (HeaderContainer);