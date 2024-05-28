import React from "react";
import s from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";
import Preloader from "../Common/Preloader/Preloader";

const Sidebar = () => {

    let addAlert = () => {
        alert('samuraiJS.com');
    }

    let addAlertTextArea = () => {
        let text = document.getElementById('new-search').value;
        alert(text);
    }

    return <nav className={s.site}>
        <div className={s.item}><NavLink to='/users'>Search</NavLink></div>
        <div>
            <div>
                <textarea id='new-search'></textarea>
            </div>
            <div>
                <button onClick={addAlertTextArea}>alertTextArea</button>
                <button onClick={addAlert}>samurai</button>
            </div>
            <Preloader/>
            <div>
                <img src={'https://media.giphy.com/media/9TtwPvGwQB8QM/giphy.gif'}/>
            </div>
        </div>
    </nav>
}

export default Sidebar;