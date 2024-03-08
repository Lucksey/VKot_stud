import React from "react";
import s from "./Sitebar.module.css";

const Sitebar = (props) => {

    let addAlert = () => {
        alert('samuraiJS.com');
    }

    // лезем в DOM элементы (см. 31 и 100 урок)
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

export default Sitebar;