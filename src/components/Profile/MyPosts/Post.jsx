import React from 'react'
import s from './Post.module.css'
const Post = (props) => {
    return (
        <div className={s.post}>
          <p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Eo_circle_orange_white_letter-s.svg/1200px-Eo_circle_orange_white_letter-s.svg.png" className={s.messageImg} />{props.message}</p>
          <p className={s.likes}>Likes {props.count}</p>
        </div>
    );
}
export default Post;