import React from 'react';
import s from './Dialogs.module.css';
import {Redirect} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import MyMessage from "./Message/myMessage";
import {reduxForm} from "redux-form";
import DialogsForm from "./Message/DialogsForm";
const DialogsReduxForm = reduxForm({form:'message'}) (DialogsForm)
const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(dialogsEl =>
        <DialogItem name={dialogsEl.name} link={dialogsEl.id} url={dialogsEl.url} />);
    let messagesEl = props.dialogsPage.messages.map(message =>
        <Message letter={message.message} id={message.id} />);
    let myMessagesEl = props.dialogsPage.myMessages.map(myM =>
        <MyMessage myLetter={myM.myMessage} id={myM.id} />);
    let onSendMessage = (formData) => {
        props.sendMessage(formData.message);
    }
    if(props.isAuth===false) {
        return <Redirect to="/login" />
    }
        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesEl}
                    {myMessagesEl}
                <footer>
                    <DialogsReduxForm onSubmit={onSendMessage} />
                </footer>
                </div>
            </div>
        );
}
export default Dialogs;