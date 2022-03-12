import {Field} from "redux-form";
import React from "react";
import st from './MyPosts.module.css';
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
const maxLength10 = maxLengthCreator(10);
const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder='Write your thoughts...'
                   component={Textarea} name="post" validate={[requiredField, maxLength10]} />
            <div className={st.button}><button>Send</button></div>
        </form>
    );
}
export default MyPostsForm;
