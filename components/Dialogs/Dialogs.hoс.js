import {useDispatch, useSelector} from "react-redux";
import {sendMessage} from "../../redux/dialogs-reducer";
import React from 'react';

export const useGetDataDialogs = () => {
    const dialogsPage = useSelector(state => state.dialogsPage)
    const dispatch = useDispatch()

    let newMessageBody = dialogsPage.newMessageBody;

    let onSendMessageClick = (newMessageBody) => {
        dispatch(sendMessage(newMessageBody));
    }

    return {
        onSendMessageClick,
        dialogs: dialogsPage.dialogs,
        messages: dialogsPage.messages,
        newMessageBody
    }
}
