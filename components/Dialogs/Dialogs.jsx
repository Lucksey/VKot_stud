import React from "react";
import s from "./Dialogs.module.css";
import {useGetDataDialogs} from './Dialogs.hoс'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";

const Dialogs = () => {
    const {dialogs, messages, newMessageBody, onNewMessageChange, onSendMessageClick}=useGetDataDialogs();// используем кастомный хук
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                <div>ава пользователя и сообщения по разные стороны диалога</div>
                <div>{messages.map(m => <Message key={m.id} message={m.message}/>)}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAuthNavigate(Dialogs);