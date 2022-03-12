import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css";
const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Input} name="email" placeholder="Email"
                    validate={requiredField} />
                </div>
                <div>
                    <Field component={Input} name="password" placeholder="Password"
                    validate={requiredField} type="password" />
                </div>
                <div>
                    <Field component={Input} name="rememberMe" type="checkbox" />Remember me
                </div>
                {props.error?<div className={s.formError}>
                    {props.error}
                </div>:undefined}
                <div>
                    <button>Login</button>
                </div>
            </form>
    );
}
const LoginReduxForm = reduxForm({form:'login'})(LoginForm);
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth) {
        return <Redirect to="/profile" />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login}) (Login);