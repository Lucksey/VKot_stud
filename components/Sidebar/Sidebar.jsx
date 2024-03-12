import React from "react";
import s from "./Sidebar.module.css";

const Sidebar = (props) => {

    let addAlert = () => {
        alert('samuraiJS.com');
    }

    let addAlertTextArea = () => {
        let text = document.getElementById('new-search').value;
        alert(text);
    }

    return <nav className={s.site}>
        Search
        <div>
            <div>
                <textarea id='new-search'></textarea>
            </div>
            <div>
                <button onClick={addAlertTextArea}>alertTextArea</button>
                <button onClick={addAlert}>samurai</button>
            </div>
            <div>
                Three friends bar
            </div>
        </div>
    </nav>
}

export default Sidebar;