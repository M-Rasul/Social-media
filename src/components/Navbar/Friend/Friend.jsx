import s from './Friend.module.css';
const Friend = (props) => {
    return (
      <div>
          <section className={s.float}>
              <img src={props.url} className={s.friendImage} />
              <p className={s.clear}>{props.name}</p>
          </section>
      </div>
    );
}
export default Friend;