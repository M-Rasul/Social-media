import s from './myMessage.module.css';
const MyMessage = (props) => {
    return (
        <div className={s.myMessage}>{props.myLetter}</div>
    );
}
export default MyMessage;