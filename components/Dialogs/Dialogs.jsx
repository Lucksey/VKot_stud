import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {getKeyEventProps} from "@testing-library/user-event/dist/keyboard/getEventProps";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='Sasha' id='1'/>
                <DialogItem name='Маша' id='2'/>
                <DialogItem name='Глаша' id='3'/>
                <DialogItem name='Vova' id='4'/>
                <DialogItem name='Yura' id='5'/>
                <DialogItem name='Oleg' id='6'/>
            </div>
            <div className={classes.messages}>
                <Message message='Hi'/>
                <Message message='How are you'/>
                <Message message='эщькере'/>
                <Message message='Yo'/>
                <Message message='Ска'/>
            </div>
        </div>
)
}

export default Dialogs;