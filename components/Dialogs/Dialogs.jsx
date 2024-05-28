import React from "react";
import s from "./Dialogs.module.css";
import {useGetDataDialogs} from './Dialogs.hoс'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {useForm} from "react-hook-form";

const Dialogs = () => {
    const {dialogs, messages, onSendMessageClick} = useGetDataDialogs();
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                <div>ава пользователя и сообщения по разные стороны диалога</div>
                <div>{messages.map(m => <Message key={m.id} message={m.message}/>)}</div>
                <AddMessageForm onSendMessageClick={onSendMessageClick}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {

    const {register, handleSubmit, reset} = useForm();

    let onSubmit = (data) => {
        props.onSendMessageClick(data.newMessageBody)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='Enter your message' {...register("newMessageBody")}/>
            <input type="submit"/>
        </form>
    )
}


export default withAuthNavigate(Dialogs);