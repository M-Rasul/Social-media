import {Field} from "redux-form";
import s from "../Dialogs.module.css";
import React from "react";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
const maxLength10 = maxLengthCreator(10);
const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder='Write something...' className={s.messageArea}
                   component={Textarea} name="message" validate={[requiredField, maxLength10]} />
            <div className={s.messageSend}>
                <button className={s.send}>Send</button>
            </div>
        </form>
    );
}
export default DialogsForm;