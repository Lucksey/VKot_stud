import {useDispatch, useSelector} from "react-redux";
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import {Navigate} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import React, {useEffect} from 'react';

//создал кастомный хук
export const useGetDataDialogs=()=>{
    const dialogsPage = useSelector(state=>state.dialogsPage)
    const isAuth = useSelector(state=>state.auth.isAuth)
    const dispatch = useDispatch()

    let newMessageBody = dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        dispatch(sendMessage());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        dispatch(updateNewMessageBody(body));
    }

    let navigate = useNavigate();
    useEffect(()=>{
        if(!isAuth){
            return navigate("/login")
        }
    }, [isAuth])

  return {
      onSendMessageClick,
      onNewMessageChange,
      dialogs: dialogsPage.dialogs,
      messages: dialogsPage.messages,
      newMessageBody
  }
}
