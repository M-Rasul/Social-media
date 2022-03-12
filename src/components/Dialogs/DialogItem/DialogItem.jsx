import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={props.link} activeClassName={s.active}><img src={props.url} className={s.messageAva} />{props.name}</NavLink>
        </div>
    );
}
export default DialogItem;