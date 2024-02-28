import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {getKeyEventProps} from "@testing-library/user-event/dist/keyboard/getEventProps";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Миша'},
        {id: 3, name: 'Глаша'},
        {id: 4, name: 'Yaura'},
        {id: 5, name: 'Oleg'},
    ]

    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'эщькере'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Sky'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message} id={messageData[0].id}/>
                <Message message={messageData[1].message} id={messageData[1].id}/>
                <Message message={messageData[2].message} id={messageData[2].id}/>
                <Message message={messageData[3].message} id={messageData[3].id}/>
                <Message message={messageData[4].message} id={messageData[4].id}/>
            </div>
        </div>
    )
}

export default Dialogs;