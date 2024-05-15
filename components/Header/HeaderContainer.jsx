import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        usersAPI.authUser()
            .then(data => {                  // response вместо data
                if (data.resultCode === 0) { // response.data.resultCode
                    let {id, login, email} = data.data;
                    this.props.setAuthUserData(id, login, email);
                }
            });
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
export default connect(mapStateToProps,{setAuthUserData}) (HeaderContainer);