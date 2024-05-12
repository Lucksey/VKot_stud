import {useDispatch, useSelector} from "react-redux";
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import React from "react";

//создал кастомный хук
export const useGetDataDialogs=()=>{
    const dialogsPage =useSelector(state=>state.dialogsPage)
    const dispatch = useDispatch()

    let newMessageBody = dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        dispatch(sendMessage());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        dispatch(updateNewMessageBody(body));
    }
  return {
      onSendMessageClick,
      onNewMessageChange,
      dialogs: dialogsPage.dialogs,
      messages: dialogsPage.messages,
      newMessageBody
  }
}
