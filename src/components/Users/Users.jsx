import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/images.png";
import {NavLink} from "react-router-dom";
let Users = (props) => {
    let totalPages = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for(let i=1;i<=totalPages;i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map( p => {
                    return <span className={props.currentPage===p && s.selected}
                                 onClick={() => {props.onPageChanged(p)}}>{p}</span>
                })}
            </div>
            {
                props.users.map(u =>
                    <div>
                      <span>
                          <div>
                              <NavLink to={"/profile/" + u.id}>
                                  <img src={u.photos.small!=null?u.photos.small:userPhoto} className={s.userImage} />
                              </NavLink>
                          </div>
                          <div>
                              {u.followed
                                  ? <button disabled={props.followingInProgress.some(id => id===u.id)}
                                            onClick={() => {
                                      props.unfollowThunk(u.id);
                                      }}>Unfollow</button>
                                  : <button disabled={props.followingInProgress.some(id => id===u.id)}
                                            onClick={() => {
                                      props.followThunk(u.id);
                                      }}>Follow</button>}
                          </div>
                      </span>
                        <span>
                          <span>
                              <div>{u.name}</div>
                              <div>{u.status}</div>
                          </span>
                          <span>
                              <div>{"u.location.country"}</div>
                              <div>{"u.location.city"}</div>
                          </span>
                      </span>
                    </div>
                )
            }
        </div>
    );
}
export default Users;