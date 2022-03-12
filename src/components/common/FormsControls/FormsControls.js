import React from 'react';
import s from './FormsControls.module.css';
const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError?s.formControl + " " + s.error:s.formControl}>
            <div>
                {props.children}
            </div>
            {hasError?<span>{meta.error}</span>:undefined}
        </div>
    );
}
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}