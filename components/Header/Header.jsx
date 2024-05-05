import React from 'react';
import s from './Header.module.css'
import logotype from '../../assets/images/logoEye.png'
const Header = () => {
    return (
        <header className={s.header}>
        <img alt='imageLogotype' title='это логотип получается' src={logotype}/>
    </header>
    )
}

export default Header;