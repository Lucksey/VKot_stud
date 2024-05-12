import React from 'react';
import s from './Header.module.css'
import logotype from '../../assets/images/logoEye.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
        <img alt='imageLogotype' title='это логотип получается' src={logotype}/>
            <div className={s.loginBlock}>
                {props.isAuth ? [props.email,' ', props.login]
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
    </header>
    )
}

export default Header;