import s from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <header className={s.header}>
          <img src='https://s1.mzstatic.com/us/r30/Purple/v4/c1/b0/90/c1b09086-9e5e-be6d-d25b-9af7cdf9c1ba/mzl.uthjrxbw.png'
               className={s.float} />
          <div className={s.head}>Speech</div>
          <div className={s.loginBlock}>
              {props.login?<div>{props.login}-
                  <button onClick={props.logout}>Log-Out</button></div>:<NavLink to={'/login'}>Login</NavLink>}
          </div>
        </header>
    );
}
export default Header;