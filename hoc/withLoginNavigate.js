import {Navigate} from "react-router-dom";
import React, {Component} from "react";
import {useSelector} from "react-redux";

export const withLoginNavigate = (Component) => {
    const NavigateComponent = (props)=> {
        const isAuth = useSelector(state=>state.auth.isAuth)
        if (!isAuth) {
            return <Component {...props} />
        }
        return  <Navigate to={"/profile"}/>
    }
    return NavigateComponent;
}