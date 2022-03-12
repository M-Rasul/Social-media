import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friend from './Friend/Friend';
const Navbar = (props) => {
                    const friendItems =props.navbar.friends.map(friend => <Friend name={friend.name} url={friend.url}/>)
                    return (<nav className={s.nav}>
                        <div className={s.menuWrapper}>
                            <div className={s.menuOptions}><NavLink to='/profile'
                                                                    activeClassName={s.active}>Profile</NavLink></div>
                            <div className={s.menuOptions}><NavLink to='/dialogs'
                                                                    activeClassName={s.active}>Dialogs</NavLink></div>
                            <div className={s.menuOptions}><NavLink to='/users'
                                                                    activeClassName={s.active}>Users</NavLink></div>
                            <div className={s.menuOptions}><NavLink to='/news' activeClassName={s.active}>News</NavLink>
                            </div>
                            <div className={s.menuOptions}><NavLink to='/music'
                                                                    activeClassName={s.active}>Music</NavLink></div>
                            <div className={s.settings}><NavLink to='/settings'
                                                                 activeClassName={s.active}>Settings</NavLink></div>
                            <div className={s.friends}>Friends</div>
                            <div>
                                {friendItems}
                            </div>
                        </div>
                    </nav>);
}
export default Navbar;