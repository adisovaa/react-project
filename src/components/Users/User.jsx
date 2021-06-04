import React from 'react'
import s from "./Users.module.css";
import userPhoto from "../../assets/images/icon.png";
import {NavLink} from "react-router-dom";

const User = ({ user, followingInProgress, unfollow , follow}) => {
    return (
        <div>
             <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                       <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto}
                            alt=""/>
                    </NavLink>
                </div>2
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress
                            .some(id => id === user.id)}
                                  onClick={() => {unfollow(true, user.id)}}>Unfollow</button>

                        : <button disabled={followingInProgress
                            .some(id => id === user.id)}
                                  onClick={() => {follow(false, user.id)}}>Follow</button>
                    }
                </div>
            </span>
            <span>
           <span>
               <div>{user.name}</div>
               <div>{user.status}</div>
           </span>
            <span>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
            </span>
        </span>
        </div>
    )
}

export default User;