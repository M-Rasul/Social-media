import s from './MyPosts.module.css';
import Post from "./Post";
import React from "react";
import {reduxForm} from "redux-form";
import MyPostsForm from "./MyPostsForm";
const MyPostsReduxForm = reduxForm({form:'myPost'}) (MyPostsForm)
const MyPosts = React.memo((props) => {
        let postsEl = props.posts.map(comment => <Post message={comment.message} count={comment.count}/>);
        let onAddPost = (formData) => {
            props.addPost(formData.post);
        }
        return (
            <div className={s.posts}>
                <h2>My posts</h2>
                <div>
                    <MyPostsReduxForm onSubmit={onAddPost}/>
                </div>
                <div className={s.postNew}>
                    <div className={s.sepPost}>
                        {postsEl}
                    </div>
                </div>
            </div>);
    })

export default MyPosts;