import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import {getKeyEventProps} from "@testing-library/user-event/dist/keyboard/getEventProps";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;