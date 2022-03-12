import s from "./Message.module.css";
import React from "react";
const Message = (props) => {
    return (
        <div>
            <div className={s.message}>{props.letter}</div>
        </div>
    );
}
export default Message;